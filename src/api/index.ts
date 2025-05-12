import express from "express";

import recipeRouter from "./recipes";
import savedRecipesRouter from "./savedRecipes"

const router = express.Router();
router.use("/recipes", recipeRouter);
router.use("/saved-recipes", savedRecipesRouter);

export default router;
