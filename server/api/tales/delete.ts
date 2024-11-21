import {Tales} from "~/server/models/Tale.model.js";

export default defineEventHandler(async(event) => {
    if (event.node.req.method === 'POST') {

        let query = await readBody(event)

        return Tales.deleteOne({ _id: query.taleId })
    }
});