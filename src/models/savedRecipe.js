import mongoose from "mongoose";

const schema = new mongoose.Schema({
    recipeId:  String
});

export const SavedRecipe = mongoose.model("SavedRecipe", schema, "saved-recipes");