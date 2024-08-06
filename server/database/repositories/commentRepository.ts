import {Comments} from "~/server/models/Comment.model";

export async function createComment(userName: string, text: string, taleId: string) {
    return await Comments.create({ text, userName, taleId })
        .then((data) => {
            return data
        }).catch((error) => {
            throw error
        })
}
