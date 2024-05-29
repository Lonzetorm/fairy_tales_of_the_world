import { H3Event, sendError } from 'h3'
import { Users } from "~/server/models/User.model";
import bcrypt from 'bcrypt'
import { IUser } from '~/types/IUser';
import { createUser } from '~/server/database/repositories/userRespository'
// import { ZodError } from "zod"
// import sendDefaultErrorResponse from '/server/app/errors/responses/DefaultErrorsResponse';
import registerRequest from '~/server/app/formRequests/RegisterRequest';
import { validateUser } from '~/server/app/services/userService';
// import { makeSession } from '/server/app/services/sessionService';
// import sendZodErrorResponse from '~~/server/app/errors/responses/ZodErrorsResponse';

async function CreateUser(name: string, email: string, password: string) {
  return await Users.create({ name, email, password })
      .then((data) => {
        return data
      }).catch((error) => {
        throw error
      })
}

export default eventHandler(async (event: H3Event) => {
  try {
      let req = await readBody(event)
      console.log('stepOnek')
      console.log(req)

    // const data = await registerRequest(event)
    const data = registerRequest(event)
    const validation = await validateUser(data)
    // // const validation = validateUser(data)
    // //   console.log('validation: ', validation)
    //   console.log('validation: ')
    // // //
    if (validation.hasErrors === true && validation.errors) {
      const errors = JSON.stringify(Object.fromEntries(validation.errors))
      return sendError(event, createError({ statusCode: 422, data: errors }))
    }
    //
    const encryptedPassword: string = await bcrypt.hash('guk', 10)

      console.log('pass: ', encryptedPassword)
    //   let req = await readBody(event)
    //
    // const userData: IUser = {
    //   username: data.username,
    //   name: data.name,
    //   email: data.email,
    //   loginType: 'email',
    //   password: encryptedPassword
    // }
    //   await CreateUser(req.username, req.email, encryptedPassword)
    //
    // const user = await createUser(userData)
    //
    // return await makeSession(user, event)
      //todo Добавить требуемую обработку ошибок, установку сессии
      return true
  } catch (error: any) {

    // if (error.data instanceof ZodError) {
    //   return await sendZodErrorResponse(event, error.data)
    // }
    //
    // return await sendDefaultErrorResponse(event, 'oops', 500, error)
  }
})