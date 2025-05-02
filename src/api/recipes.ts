import express from "express";

import { Recipe } from "../models/recipe";

const router = express.Router();

router.get("/", async (req, res) => {
  const prepTime = req.query.prep_time;
  const query = prepTime
    ? { filters: {}, prep_time: { $lt: Number(prepTime) } }
    : {};
  const recipes = await Recipe.find(query).exec();
  res.json(recipes);
});

router.get("/:id", async (req, res) => {
  const recipeId = req.params.id;
  const recipe = await Recipe.findById(recipeId).exec();
  res.json(recipe);
});

router.post("/", async (req, res) => {
  //const recipe = await Recipe.create(recipeId).exec()
  const newRecipeData = req.body;
  res.json(newRecipeData);
});

//extend to get all recipes to get prep time < 30 mins (askjeeves when using express how to get query parameters)

// router.get('?prep_time', async (req, res) => {
//   const prepTime = req.query.
//   const recipe = await Recipe.findById(recipeId).exec()
//   res.json(recipe);
// })

export default router;
