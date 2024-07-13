import { createBrowserRouter } from "react-router-dom";
import Pages from "../pages";
import { CheckAuth } from "../manager/auth/authChecker";

const routes = [
  {
    path: "/",
    element: Pages.app,
  },
  {
    path: "/register",
    element: Pages.register,
  },
  {
    path: "/about",
    element: Pages.about,
  },
  {
    path: "/logout",
    element: Pages.app,
  },
  {
    path: "/recipes",
    element: Pages.recipes,
  },
  {
    path: "/recipes/:id",
    element: Pages.recipe,
  },
];

routes.map((route) => (route.element = <CheckAuth>{route.element}</CheckAuth>));

const router = createBrowserRouter(routes);

export default router;
