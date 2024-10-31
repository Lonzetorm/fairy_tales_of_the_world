import {model, Schema} from "mongoose";

const PeoplesSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    code: {
        type: String
    },
    image: {
        type: String
    },
},
    {
        timestamps: true
    })

export const Peoples = model<any>('Peoples', PeoplesSchema)