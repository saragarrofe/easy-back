import { Router } from "express";
import { getRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } from "../controllers/recipesController";

const router = Router();

router.route('/')
    .get(getRecipes)
    .post(createRecipe);

router.route('/:id')
    .get(getRecipeById)
    .put(updateRecipe)
    .delete(deleteRecipe);

export default router;