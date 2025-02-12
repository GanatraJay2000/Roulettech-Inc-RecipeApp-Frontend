import { useQuery } from "@tanstack/react-query";
import QUERY from "../config/constants/queryConstants";
import { getAllRecipes } from "../manager/recipe/recipeServices";
import { LuLogOut } from "react-icons/lu";
import Wrapper from "../components/Wrapper";
import RecipeCard from "../components/RecipeCard";
import RecipeCardAction from "../components/RecipeCardAction";
import { AccordionTrigger } from "../components/ui/accordion";

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
      <RecipeCardAction>
        <AccordionTrigger className="p-0">
          <h1 className="text-3xl font-semibold">Add Recipe</h1>
        </AccordionTrigger>
      </RecipeCardAction>
      {query.isLoading
        ? "Loading..."
        : query.data?.map((recipe) => (
            <a
              href={`/recipes/${recipe.id}`}
              key={recipe.id}
              className="rounded-lg block mb-5 hover:outline hover:outline-offset-2 hover:outline-ring"
            >
              <RecipeCard recipe={recipe} />
            </a>
          ))}
      {query.data?.length === 0 && (
        <p className="text-center">No recipes found</p>
      )}
    </Wrapper>
  );
}

export default Recipes;
