import ROUTES from "../../config/constants/apiRoutes";
// import { TRecipe } from "./recipeTypes";
import { axiosInstance } from "../axiosInstance";
import GLOBAL from "../../config/constants/global";
import { getData } from "../../lib/getterSetter";

export const generateRecipeManager = {
  getRecipes: async () => {
    return axiosInstance.get(ROUTES.RECIPES, {
      headers: {
        Authorization: `Bearer ${getData(GLOBAL.AUTH)?.access}`,
      },
    });
  },
  getRecipe: async (id: string) => {
    return axiosInstance.get(ROUTES.RECIPES + id, {
      headers: {
        Authorization: `Bearer ${getData(GLOBAL.AUTH)?.access}`,
      },
    });
  },
  // createRecipe: async (recipe: TRecipe) => {
  //   return undefined;
  // },
  // updateRecipe: async (id: string, recipe: TRecipe) => {
  //   return undefined;
  // },
  // deleteRecipe: async (id: string) => {
  //   return undefined;
  // },
};
