import { z, parseBodyAs, } from "@sidebase/nuxt-parse"
import { H3Event } from "h3"

const bodySchema = z.object({

    name: z.string({
        required_error: 'name required',
    })
        .min(1, { message: 'Не введено имя' }),

    email: z.string({
        required_error: 'valid email required',
    }).email({ message: 'Требуется электронный адрес' }),

    password: z.string({
        required_error: 'password required',
    })
        .min(8, { message: 'Пароль должен содержать минимум 8 символов' })
})

export default async function registerRequest(event: H3Event) {
    return await parseBodyAs(event, bodySchema)
}