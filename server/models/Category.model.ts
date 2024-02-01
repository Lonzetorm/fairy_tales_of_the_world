import {model, Schema} from "mongoose";

const CategoriesSchema = new Schema({
    name: {
        type: String
    },
    code: {
        type: String
    },
    },
    {
        timestamps: true
    })

export const Categories = model<any>('Categories', CategoriesSchema)