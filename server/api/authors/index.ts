import {Authors} from "~/server/models/Author.model";

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {

        return Authors.find().sort({name: 1})
    }
});