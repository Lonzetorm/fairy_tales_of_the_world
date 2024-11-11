import {Comments} from "~/server/models/Comment.model";
// @ts-ignore
import {H3Event} from "h3";

export default defineEventHandler(async (event: H3Event) => {
    if (event.node.req.method === 'POST') {
        let query = await readBody(event)

        return Comments.deleteOne({ _id: query.commentId })
    }
})