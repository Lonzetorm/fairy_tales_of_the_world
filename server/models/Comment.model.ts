import {model, Schema} from "mongoose";

const CommentsSchema = new Schema({
        text: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        taleId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    })

export const Comments = model<any>('Comments', CommentsSchema)