import { useRouter, useState } from "nuxt/app";
import { ISession } from "~/types/ISession";
import { IUser } from "~/types/IUser";
import useErrorMapper from "./useErrorMapper";

export const useAuthCookie = () => useCookie('auth_token')

export async function useUser() {
  const authCookie = useAuthCookie().value
  const user = useState<IUser | null>('user')

  if (authCookie && !user.value) {

    const cookieHeaders = useRequestHeaders(['cookie'])

    const { data } = await useFetch<IUser>(`/api/auth/getByAuthToken`, {
      headers: cookieHeaders as HeadersInit,
    })

    user.value = data.value
  }

  return user.value
}

export async function useLoggedIn() {
  const user = await useUser()

  if (!user) {
    return false
  }

  if (user.userId == null) {
    return false
  }

  return true
}

export async function userLogout() {
  await useFetch('/api/auth/logout')
  useState('user').value = undefined
  await useRouter().push('/')
}

export async function registerWithEmail(
    name: string,
    email: string,
    password: string
): Promise<FormValidation> {

  try {
    const data = await $fetch('/api/auth/register', {
      method: 'POST',
      body:  { name, email, password }
    })

    if (data) {
      useState('user').value = data
    }

    return { hasErrors: false, loggedIn: true }
  } catch (error: any) {
    return useErrorMapper(error.data.data)
  }
}

export async function loginWithEmail(usernameOrEmail: string, password: string): Promise<FormValidation> {
  try {
    const result = await $fetch('/api/auth/login', { method: 'POST', body: { usernameOrEmail: usernameOrEmail, password: password } })

    if (!result?._id) {
      throw Error('something went wrong')
    }
    useState('user').value = result

    return { hasErrors: false, loggedIn: true }
  } catch (error: any) {
    //todo: Поправить

    // return useErrorMapper(error.data.data)
  }
}