import { createComment, getAllComments } from '~/server/database/repositories/commentRepository'

export async function addComment(
    text: string,
    userName: string,
    taleId: string
): Promise<FormValidation> {

    try {
        createComment(text, userName, taleId)

    } catch (error: any) {

    }
}
