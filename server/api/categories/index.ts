// import {Categories} from "~/server/models/Category.model";

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {
        // return Categories.find()
        return {
            name: 'Hi',
            id: 'hi'
        }
    }
});