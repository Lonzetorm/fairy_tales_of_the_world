import { getUserByEmail } from "~/server/database/repositories/userRespository"
import { RegistrationRequest } from "~/types/IRegistration"


export async function validate(data: RegistrationRequest) {

    const errors = new Map<string, { message: string | undefined }>()

    for (const [key, value] of Object.entries(data)) {
        let val = await validateRegistration(key, value)

        if (val.hasError) {
            errors.set(key, { 'message': val.errorMessage })
        }
    }

    return errors
}

async function validateRegistration(key: string, value: string): Promise<InputValidation> {
    const check: InputValidation = {
        value,
        isBlank: false,
        lenghtMin8: true,
        key,
        hasError: false
    }

    if (key == 'password') {
        if (value.length < 8) {
            check.hasError = true
            check.errorMessage = `Пароль должен содержать минимум 8 символов`
        }
        check.lenghtMin8 = false
    }

    if (key == 'email') {
        const email = await getUserByEmail(value)
        if (email.length !== 0) {
            check.emailTaken = true
            check.hasError = true
            check.errorMessage = `Электронный адрес уже занят`
        }
    }

    return check
}
