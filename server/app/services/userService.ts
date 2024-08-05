import { RegistrationRequest } from '~~/types/IRegistration';
import { H3Event } from 'h3';
import { getUserBySessionToken } from './sessionService';
// import { isString } from '@vueuse/core';
import { IUser } from '~~/types/IUser';
import { validate } from './validator';
import {useState} from "nuxt/app";

export async function validateUser(data: RegistrationRequest) {

    const errors = await validate(data)

    if (errors.size > 0) {

        return { hasErrors: true, errors }
    }

    return { hasErrors: false }
}

export function sanitizeUserForFrontend(user: IUser | undefined): User | undefined {

    if (!user) {
        return user
    }

    // delete user.password;

    return user as User
}

export async function authCheck(event: H3Event): Promise<boolean> {

    const authToken = getCookie(event, 'auth_token')
    console.log('authToken 1: ', authToken)

    // const hasAuthToken = isString(authToken)
    const hasAuthToken = (typeof authToken) === 'string'

    if(!hasAuthToken) {
        return false
    }

    const user  = await getUserBySessionToken(authToken)
    // todo: Наличие здесь useSate - это костыль, который надо будет переделать
    useState('user').value = authToken

    if(user) {
        return true
    }

    return false
}

