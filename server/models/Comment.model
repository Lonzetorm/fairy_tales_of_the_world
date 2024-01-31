import {model, Schema} from "mongoose";

const CommentsSchema = new Schema({
        text: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    })

export const Comments = model<any>('Comments', CommentsSchema)