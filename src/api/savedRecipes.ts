import express from "express";

import { SavedRecipe } from "../models/savedRecipe";

const router = express.Router();

router.get("/", async (req, res) => {
  const recipes = await SavedRecipe.find();
  res.json(recipes);
});

router.post("/", async (req, res) => {
  
});

router.post(",", async (req, res) => {
  
});

export default router;
