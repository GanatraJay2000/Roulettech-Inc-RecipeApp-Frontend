import { useQuery } from "@tanstack/react-query";
import QUERY from "../config/constants/queryConstants";
import { getAllRecipes } from "../manager/recipe/recipeServices";
import { LuLogOut } from "react-icons/lu";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
  const query = useQuery({
    queryKey: QUERY.RECIPES,
    queryFn: getAllRecipes,
  });

  return (
    <Wrapper>
      <a
        className="md:fixed top-10 left-10 flex items-center gap-2 mb-5 md:m-0"
        href="/logout"
      >
        Logout <LuLogOut />
      </a>
      {query.isLoading
        ? "Loading..."
        : query.data?.map((recipe) => (
            <a
              href={`/recipes/${recipe.id}`}
              key={recipe.id}
              className="block mb-5"
            >
              <RecipeCard recipe={recipe} />
            </a>
          ))}
    </Wrapper>
  );
}

export default Recipes;
