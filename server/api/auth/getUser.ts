import { H3Event } from "h3";
import sendDefaultErrorResponse from "~/server/app/errors/responses/DefaultErrorsResponse";
import { Users } from "~/server/models/User.model";

export default eventHandler(async (event: H3Event) => {
    try {
        if (event.node.req.method === 'GET') {
            const query = getQuery(event)
            let filter = { email: query.email }

            return Users.find(filter)
        }
    } catch (error: any) {
        return await sendDefaultErrorResponse(event, 'Failed query', 500, error)
    }
})