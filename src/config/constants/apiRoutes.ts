import GLOBAL from "./global";

const ROUTES = {
  REGISTER: GLOBAL.API_URL + "account/api/register/",
  LOGIN: GLOBAL.API_URL + "api/token/",
  RECIPES: GLOBAL.API_URL + "api/",
  RECIPE: (id: string) => ROUTES.RECIPES + id + "/",
};

export default ROUTES;
