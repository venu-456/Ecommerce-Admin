import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
})

export const newProduct = models.newProduct || model('newProduct',ProductSchema);