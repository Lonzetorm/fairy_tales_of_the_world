import {Authors} from "~/server/models/Author.model";
import {H3Event} from "h3";

export default defineEventHandler(async (event: H3Event) => {
    if (event.node.req.method === 'POST') {
        let query = await readBody(event)

        return Authors.create({
            name: query.name,
            description: query.description,
            code: query.code,
            image: query.image
        })
    }
})