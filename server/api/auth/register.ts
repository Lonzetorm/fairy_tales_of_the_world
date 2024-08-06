import { H3Event, sendError } from 'h3'
import bcrypt from 'bcrypt'
import { createUser } from '~/server/database/repositories/userRespository'
import { ZodError } from "zod"
import sendDefaultErrorResponse from '@/server/app/errors/responses/DefaultErrorsResponse';
import registerRequest from '@/server/app/formRequests/RegisterRequest';
import { validateUser } from '@/server/app/services/userService';
import { makeSession } from '~/server/app/services/sessionService';
import sendZodErrorResponse from '@/server/app/errors/responses/ZodErrorsResponse';

export default eventHandler(async (event: H3Event) => {
  try {
      let req = await readBody(event)

    const data = await registerRequest(event)
    const validation = await validateUser(data)

    if (validation.hasErrors && validation.errors) {
      const errors = JSON.stringify(Object.fromEntries(validation.errors))
      return sendError(event, createError({ statusCode: 422, data: errors }))
    }

    const encryptedPassword: string = await bcrypt.hash(req.password, 10)

    const user = await createUser(data.name, data.email, encryptedPassword)
    console.log('user: ', user)

    return await makeSession(user, event)
  } catch (error: any) {
    if (error.data instanceof ZodError) {
      return await sendZodErrorResponse(event, error.data)
    }

    return await sendDefaultErrorResponse(event, 'Failed registration', 500, error)
  }
})