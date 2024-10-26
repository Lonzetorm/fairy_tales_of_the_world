import { authCheck } from "~/server/app/services/userService"
import {useState} from "nuxt/app";
import {useUser} from "~/composables/useAuth";

export default eventHandler(async (event) => {

 const isAllowed = await authCheck(event)
 const user = await useUser()

 // if (!isAllowed) {
 //  return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
 // }
})
