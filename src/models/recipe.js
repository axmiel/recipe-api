import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  image: String,
  prep_time: Number,
  category: { type: [String], default: [] },
  cuisine: { type: [String], default: [] },
});

export const Recipe = mongoose.model("Recipes", schema);
