import {Comments} from "~/server/models/Comment.model";
import {H3Event} from "h3";

export default defineEventHandler(async (event: H3Event) => {
    if (event.node.req.method === 'POST') {
        let query = await readBody(event)
        console.log('commentEvent: ', query)

        return Comments.create({
            taleId: query.taleId,
            text: query.text,
            userName: query.userName
        })
    }
})