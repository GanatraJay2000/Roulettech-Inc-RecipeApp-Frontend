import { generateAuthManager } from "./auth/authManager";
import { generateRecipeManager } from "./recipe/recipeManager";

export const API = {
  auth: generateAuthManager,
  recipe: generateRecipeManager,
};
