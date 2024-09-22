import { Request, Response } from 'express';
import Recipe from '../models/Recipe';

export const getRecipes = async (req: Request, res: Response): Promise<void> => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes' });
    }
};

export const getRecipeById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        if(recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipe' });
    }
};

export const createRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const newRecipe = new Recipe(req.body);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Error creating recipe' });
    }
};

export const updateRecipe = async (req: Request, res: Response): Promise<void> => { 
    try {
        const updateRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(updateRecipe) {
            res.status(200).json(updateRecipe);
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating recipe' });
    }
};

export const deleteRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleteRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if(deleteRecipe) {
            res.status(200).json({ message: 'Recipe deleted successfully' });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting recipe'});
    }
};


