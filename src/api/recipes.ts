// @ts-nocheck
import express from "express";

import { Recipe } from "../models/recipe";

const router = express.Router();

router.get("/", async (req, res) => {
  const { prep_time, category, cuisine } = req.query;
  
  const query = {}

  if (prep_time) {
    query.prep_time = { $lt: Number(prep_time) }
  }

  if (category) {
    const categoriesArray = category.split(',')
    query.category = { $in: categoriesArray }
  }

  if (cuisine) {
    const cuisinesArray = cuisine.split(',')
    query.cuisine = { $in: cuisinesArray }
  }

  const recipes = await Recipe.find(query).exec();
  res.json(recipes);
})

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

export default router;
