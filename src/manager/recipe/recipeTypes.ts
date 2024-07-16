export type TRecipe = {
  id: string;
  title: string;
  ingredients: string;
  time_required: number;
  instructions: string;
  created_at: string;
  updated_at: string;
  user: number;
};

export type TRecipeDTO = {
  title: string;
  ingredients: string;
  time_required: number;
  instructions: string;
};
