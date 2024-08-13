import {Tales} from "~/server/models/Tale.model.js";

export default defineEventHandler(async(event) => {
    if (event.node.req.method === 'POST') {

        let query = await readBody(event)
        console.log('taleEvent: ', query)

        return Tales.create({
            name: query.name,
            description: query.description,
            text: query.text,
            category: query.category,
            people: query.people
        })
    }
});