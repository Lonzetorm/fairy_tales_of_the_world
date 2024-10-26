import { deleteCookie, H3Event } from "h3";

export default eventHandler((event: H3Event) => {
  deleteCookie(event, 'auth_token')
  return 'successfully logged out'
})
