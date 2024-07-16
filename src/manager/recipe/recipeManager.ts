import ROUTES from "../../config/constants/apiRoutes";
// import { TRecipe } from "./recipeTypes";
import { axiosInstance } from "../axiosInstance";
import GLOBAL from "../../config/constants/global";
import { getData } from "../../lib/getterSetter";
import { TRecipeDTO } from "./recipeTypes";

export const generateRecipeManager = {
  getRecipes: async () => {
    return axiosInstance.get(ROUTES.RECIPES, {
      headers: {
        Authorization: `Bearer ${getData(GLOBAL.AUTH)?.access}`,
      },
    });
  },

  getRecipe: async (id: string) => {
    return axiosInstance.get(ROUTES.RECIPE(id), {
      headers: {
        Authorization: `Bearer ${getData(GLOBAL.AUTH)?.access}`,
      },
    });
  },

  createRecipe: async (recipe: TRecipeDTO) => {
    return axiosInstance.post(ROUTES.RECIPES, recipe, {
      headers: {
        Authorization: `Bearer ${getData(GLOBAL.AUTH)?.access}`,
      },
    });
  },

  updateRecipe: async (id: string, recipe: TRecipeDTO) => {
    return axiosInstance.put(ROUTES.RECIPE(id), recipe, {
      headers: {
        Authorization: `Bearer ${getData(GLOBAL.AUTH)?.access}`,
      },
    });
  },

  deleteRecipe: async (id: string) => {
    return axiosInstance.delete(ROUTES.RECIPE(id), {
      headers: {
        Authorization: `Bearer ${getData(GLOBAL.AUTH)?.access}`,
      },
    });
  },
};
