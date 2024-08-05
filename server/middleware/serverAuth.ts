import { H3Event } from "h3"
import { authCheck } from "~/server/app/services/userService"

export default eventHandler(async (event) => {

 await protectAuthRoute(event)
 //
 // if (!isAllowed) {
 //  return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
 // }
})

async function protectAuthRoute(event: H3Event): Promise<boolean> {
 return await authCheck(event)
}