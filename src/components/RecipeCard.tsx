import Card from "./Card";
import { TRecipe } from "../manager/recipe/recipeTypes";

function RecipeCard({ recipe }: { recipe: TRecipe }) {
  return (
    <Card key={recipe.title}>
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
