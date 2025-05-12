import express from "express";

import { SavedRecipe } from "../models/savedRecipe";

const router = express.Router();

router.get("/", async (req, res) => {
  const recipes = await SavedRecipe.find();
  res.json(recipes);
});

router.post("/", async (req, res) => {
  const newSavedRecipe = await SavedRecipe.create(req.body)
  console.log(newSavedRecipe)
  res.json(newSavedRecipe)
});

export default router;
