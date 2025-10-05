import {Tales} from "~/server/models/Tale.model.js";

export default defineEventHandler(async(event) => {
    if (event.node.req.method === 'POST') {

        let query = await readBody(event)

        return Tales.create({
            name: query.name,
            description: query.description,
            text: query.text,
            category: query.category,
            people: query.people,
            author: query.author,
            image: query.image ? '/uploads/tales/' + query.image : '',
            popular: query.popular
        })
    }
});