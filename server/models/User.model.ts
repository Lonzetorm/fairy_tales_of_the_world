import {model, Schema} from "mongoose";

const UsersSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        rights: {
            type: Number,
            required: false,
            default: 0
        }
    },
    {
        timestamps: true
    })

export const Users = model<any>('Users', UsersSchema)