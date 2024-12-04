import { IUser } from '~/types/IUser';
import { ISession } from '~~/types/ISession';
import { makeNewSession } from '~/composables/useSession'

export async function createSession(sessionData: ISession): Promise<ISession> {
  if (!sessionData.authToken) {
    throw Error('missing auth token for session')
  }

  await makeNewSession(sessionData.userId, sessionData.authToken, sessionData.userName, sessionData.userRights)

  return  {
    userId: sessionData.userId,
    authToken: sessionData.authToken,
    userName: sessionData.userName,
    userRights: sessionData.userRights
  }
}

export async function getSessionByAuthToken(authToken: string): Promise<ISession> {
  const user: User = await getUserByAuthToken(authToken) as unknown as User

  return { authToken, user }
}

async function getUserByAuthToken(authToken: string): Promise<User | null> {
  return await $fetch('/api/storage/redisGet', {
    method: 'POST',
    body:  {
      authToken: authToken
    }
  })
}
