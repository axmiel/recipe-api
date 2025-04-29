import mongoose from "mongoose";

const schema = new mongoose.Schema({ name: String, image: String });
export const Recipe = mongoose.model('Recipes', schema);