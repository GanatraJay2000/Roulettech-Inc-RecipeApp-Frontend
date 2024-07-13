import { useQuery } from "@tanstack/react-query";
import QUERY from "../config/constants/queryConstants";
import { getRecipe } from "../manager/recipe/recipeServices";
import { LuLogOut } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

function Recipe() {
  const { id } = useParams<{ id: string }>();

  const query = useQuery({
    queryKey: QUERY.RECIPE,
    queryFn: () => getRecipe(id ?? "0"),
  });

  return (
    <div className="w-1/3 mx-auto mt-10">
      <a
        href="/recipes"
        className="text-xl font-medium mb-3 flex items-center gap-2"
      >
        <IoChevronBackOutline />
        Back
      </a>
      {query.isLoading ? (
        "Loading..."
      ) : (
        <div
          key={query.data?.title}
          className="border shadow-sm mb-5 p-4 rounded-lg"
        >
          <h1 className="text-3xl font-semibold">{query.data?.title}</h1>
          <p className="mt-2">
            <span className="font-medium">Ingredients: </span>
            {query.data?.ingredients}
          </p>
          <p className="mt-2">
            <span className="font-medium">Time Required: </span>
            {query.data?.time_required} minutes
          </p>
          <p className="mt-2">
            <span className="font-medium">Instructions: </span>
            {query.data?.instructions}
          </p>
        </div>
      )}
      <a
        className="fixed top-10 left-10 flex items-center gap-2 m-0"
        href="/logout"
      >
        Logout <LuLogOut />
      </a>
    </div>
  );
}

export default Recipe;
