import {Tales} from "~/server/models/Tale.model.ts";

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {

        try {
            return Tales.findOne({_id: event.context.params.id})
        } catch(error) {
            console.log('error: ', error)
        }

    }
});