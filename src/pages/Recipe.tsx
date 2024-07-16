import { deleteRecipe, getRecipe } from "../manager/recipe/recipeServices";
import { useNavigate, useParams } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import Wrapper from "../components/Wrapper";
import RecipeCard from "../components/RecipeCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import QUERY from "../config/constants/queryConstants";

import RecipeCardAction from "../components/RecipeCardAction";

function Recipe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: [QUERY.RECIPE, id],
    queryFn: () => getRecipe(id!),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteRecipe,
  });

  async function onDelete() {
    const response = await deleteMutation.mutateAsync(id!);
    if (response.status.toString().startsWith("2")) {
      navigate("/recipes/");
    }
  }

  return (
    <Wrapper>
      <a
        href="/recipes"
        className="text-xl font-medium mb-3 flex items-center gap-2"
      >
        <IoChevronBackOutline />
        Back
      </a>
      {query.isLoading ? (
        <p className="text-center">Loading ...</p>
      ) : query.isError ? (
        <p className="text-center">Recipe not found</p>
      ) : (
        query.data && (
          <>
            <RecipeCard recipe={query.data!} onDelete={onDelete} />
            <RecipeCardAction recipe={query.data} />
          </>
        )
      )}
    </Wrapper>
  );
}

export default Recipe;
