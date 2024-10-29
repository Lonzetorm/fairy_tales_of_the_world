import { authCheck } from "~/server/app/services/userService"

export default eventHandler(async (event) => {
 await authCheck(event)
})
