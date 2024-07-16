import { API } from "../API";
import { TRecipe, TRecipeDTO } from "./recipeTypes";

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

export const createRecipe = async (params: TRecipeDTO) => {
  return await API.recipe.createRecipe(params);
};

export const updateRecipe = async ({
  id,
  params,
}: {
  id: string;
  params: TRecipeDTO;
}) => {
  return await API.recipe.updateRecipe(id, params);
};

export const deleteRecipe = async (id: string) => {
  return await API.recipe.deleteRecipe(id);
};
