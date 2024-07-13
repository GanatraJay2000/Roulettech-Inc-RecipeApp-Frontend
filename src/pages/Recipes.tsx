import { useQuery } from "@tanstack/react-query";
import QUERY from "../config/constants/queryConstants";
import { getAllRecipes } from "../manager/recipe/recipeServices";
import { LuLogOut } from "react-icons/lu";

function Recipes() {
  const query = useQuery({
    queryKey: QUERY.RECIPES,
    queryFn: getAllRecipes,
  });

  return (
    <div className="w-1/3 mx-auto mt-10">
      {query.isLoading
        ? "Loading..."
        : query.data?.map((recipe) => (
            <a href={`/recipes/${recipe.id}`} key={recipe.id}>
              <div className="border shadow-sm mb-5 p-4 rounded-lg">
                <h1 className="text-3xl font-semibold">{recipe.title}</h1>
                <p className="mt-2 text-sm">
                  <span className="font-medium">Ingredients: </span>
                  {recipe.ingredients}
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-medium">Time Required: </span>
                  {recipe.time_required} minutes
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-medium">Instructions: </span>
                  {recipe.instructions}
                </p>
              </div>
            </a>
          ))}
      <a
        className="fixed top-10 left-10 flex items-center gap-2 m-0"
        href="/logout"
      >
        Logout <LuLogOut />
      </a>
    </div>
  );
}

export default Recipes;
