import { API } from "../API";
import { TRecipe } from "./recipeTypes";

export const getAllRecipes = async () => {
  const result = await API.recipe.getRecipes();
  const recipes: TRecipe[] = result.data;
  return recipes;
};

export const getRecipe = async (id: string) => {
  const result = await API.recipe.getRecipe(id);
  const recipe: TRecipe = result.data;
  return recipe;
};
