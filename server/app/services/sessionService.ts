import { sanitizeUserForFrontend } from '~/server/app/services/userService';
import { H3Event } from "h3"
import { createSession, getSessionByAuthToken } from "~~/server/database/repositories/sessionRepository"
import { v4 as uuidv4 } from 'uuid'

export async function makeSession(user: any, event: H3Event) {
    const authToken = uuidv4().replaceAll('-', '')
    const session = await createSession({ authToken, userId: user._id })
    const userId = session.userId

    if (userId) {
        setCookie(event, 'auth_token', authToken, { path: '/', httpOnly: true })

        return getUserBySessionToken(authToken)
    }

    return userId

    throw Error('Error Creating Session')
}

export async function getUserBySessionToken(authToken: string) {
    const session = await getSessionByAuthToken(authToken)
    return session.user.item.authToken

    // return sanitizeUserForFrontend(session.user)
}
