import {Peoples} from "~/server/models/People.model";

export default defineEventHandler((event) => {
    if (event.node.req.method === 'GET') {

        return Peoples.find()
    }
});