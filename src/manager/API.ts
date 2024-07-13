import { generateAuthManager } from "./auth/authManager";
import { generateRecipeManager } from "./recipe/recipeManager";
import { Axios } from "./axiosInstance";

export const API = {
  auth: generateAuthManager,
  recipe: generateRecipeManager,
};
