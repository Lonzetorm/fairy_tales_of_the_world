import {Tales} from "~/server/models/Tale.model";

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {
        const query = getQuery(event)
        let filter = query.category_id ? {category: query.category_id} : {people: query.people_id}

        return Tales.find(filter)
    }
});