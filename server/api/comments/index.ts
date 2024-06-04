import {Comments} from "~/server/models/Comment.model";

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {
        const query = getQuery(event)

        return Comments.find({taleId: query.taleId})
    }
})