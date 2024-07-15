import { useQuery } from "@tanstack/react-query";
import QUERY from "../config/constants/queryConstants";
import { getAllRecipes } from "../manager/recipe/recipeServices";
import { LuLogOut } from "react-icons/lu";
import Card from "../components/Card";

function Recipes() {
  const query = useQuery({
    queryKey: QUERY.RECIPES,
    queryFn: getAllRecipes,
  });

  return (
    <div className="md:w-1/3 md:mx-auto mx-5 mt-10">
      <a
        className="md:fixed top-10 left-10 flex items-center gap-2 mb-5 md:m-0"
        href="/logout"
      >
        Logout <LuLogOut />
      </a>
      {query.isLoading
        ? "Loading..."
        : query.data?.map((recipe) => (
            <a href={`/recipes/${recipe.id}`} key={recipe.id}>
              <Card className="mb-5">
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
              </Card>
            </a>
          ))}
    </div>
  );
}

export default Recipes;
