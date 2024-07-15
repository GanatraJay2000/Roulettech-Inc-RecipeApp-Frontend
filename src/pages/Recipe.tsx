import { getRecipe } from "../manager/recipe/recipeServices";
import { LuLogOut } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { TRecipe } from "../manager/recipe/recipeTypes";

function Recipe() {
  const { id } = useParams<{ id: string }>();
  const [query, setRecipe] = useState<TRecipe | null>(null);

  useEffect(() => {
    getRecipe(id!).then((data) => setRecipe(data));
  }, [id]);

  return (
    <div className="w-1/3 mx-auto mt-10">
      <a
        href="/recipes"
        className="text-xl font-medium mb-3 flex items-center gap-2"
      >
        <IoChevronBackOutline />
        Back
      </a>
      {/* {query.isLoading ? (
        "Loading..."
      ) : ( */}
      <Card key={query?.title}>
        <h1 className="text-3xl font-semibold">{query?.title}</h1>
        <p className="mt-2">
          <span className="font-medium">Ingredients: </span>
          {query?.ingredients}
        </p>
        <p className="mt-2">
          <span className="font-medium">Time Required: </span>
          {query?.time_required} minutes
        </p>
        <p className="mt-2">
          <span className="font-medium">Instructions: </span>
          {query?.instructions}
        </p>
      </Card>
      {/* )} */}
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
