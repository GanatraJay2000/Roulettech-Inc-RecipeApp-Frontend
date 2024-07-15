import { getRecipe } from "../manager/recipe/recipeServices";
import { useParams } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import Wrapper from "../components/Wrapper";
import RecipeCard from "../components/RecipeCard";
import { useQuery } from "@tanstack/react-query";
import QUERY from "../config/constants/queryConstants";

function Recipe() {
  const { id } = useParams<{ id: string }>();

  const query = useQuery({
    queryKey: [QUERY.RECIPE, id],
    queryFn: () => getRecipe(id!),
  });

  return (
    <Wrapper>
      <a
        href="/recipes"
        className="text-xl font-medium mb-3 flex items-center gap-2"
      >
        <IoChevronBackOutline />
        Back
      </a>
      {query.isLoading ? "Loading..." : <RecipeCard recipe={query.data!} />}
    </Wrapper>
  );
}

export default Recipe;
