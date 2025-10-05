import {model, Schema} from "mongoose";

const TalesSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        people: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    })

export const Tales = model<any>('Tales', TalesSchema)