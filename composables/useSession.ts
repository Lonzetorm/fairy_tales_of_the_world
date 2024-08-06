import useErrorMapper from "~/composables/useErrorMapper";

export async function makeNewSession(
    userId: string|number|undefined,
    authToken: string,
) {

    try {
        await $fetch('/api/storage/redisSet', {
            method: 'POST',
            body:  {
                userId: userId,
                authToken: authToken
            }
        })

        return { hasErrors: false, loggedIn: true }
    } catch (error: any) {

        return useErrorMapper(error.data.data)
    }
}
