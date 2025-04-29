import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import { Recipe } from '../models/recipe';

const router = express.Router();

router.get('/', async (req, res) => {
  const recipe = await Recipe.find({}).exec()
  res.json(recipe)
});

export default router;