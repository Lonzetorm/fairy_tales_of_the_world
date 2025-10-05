import {Tales} from "~/server/models/Tale.model";

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {
        const query = getQuery(event)
        let filter = {}
        if (query.category_id) {
            filter = {category: query.category_id}
        }
        if (query.people_id) {
            filter = {people: query.people_id}
        }
        if (query.author_id) {
            filter = {author: query.author_id}
        }

        return Tales.find(filter)
    }
});