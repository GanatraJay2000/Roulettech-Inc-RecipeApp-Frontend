import Card from "./Card";
import { TRecipe } from "../manager/recipe/recipeTypes";
import { MdDelete } from "react-icons/md";
function RecipeCard({
  recipe,
  onDelete,
}: {
  recipe: TRecipe;
  onDelete?: () => void;
}) {
  return (
    <Card key={recipe.title} className="relative">
      {onDelete && (
        <MdDelete
          onClick={() => onDelete()}
          className="absolute top-8 right-8 font-bold text-2xl hover:text-red-500 cursor-pointer"
        />
      )}

      <h1 className="text-3xl font-semibold">{recipe.title}</h1>
      <p className="mt-2">
        <span className="font-medium">Ingredients: </span>
        {recipe.ingredients}
      </p>
      <p className="mt-2">
        <span className="font-medium">Time Required: </span>
        {recipe.time_required} minutes
      </p>
      <p className="mt-2">
        <span className="font-medium">Instructions: </span>
        {recipe.instructions}
      </p>
    </Card>
  );
}

export default RecipeCard;
