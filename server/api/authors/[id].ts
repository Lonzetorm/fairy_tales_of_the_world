import {Authors} from "~/server/models/Author.model.ts";

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {

        return Authors.findOne({code: event.context.params.id})
    }
});