import {model, Schema} from "mongoose";

const AuthorsSchema = new Schema({
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

export const Authors = model<any>('Authors', AuthorsSchema)