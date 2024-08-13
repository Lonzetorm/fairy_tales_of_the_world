import {Peoples} from "~/server/models/People.model.ts";

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {

        return Peoples.findOne({code: event.context.params.id})
    }
});