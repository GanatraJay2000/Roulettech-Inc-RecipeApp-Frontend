import { TRecipe, TRecipeDTO } from "../manager/recipe/recipeTypes";
import Card from "./Card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createRecipe, updateRecipe } from "../manager/recipe/recipeServices";

const formSchema = z.object({
  title: z.string().min(2),
  ingredients: z.string().min(2),
  time_required: z.string().min(2),
  instructions: z.string().min(2),
});

function RecipeCardAction({
  recipe,
  children,
}: {
  recipe?: TRecipe;
  children?: React.ReactNode;
}) {
  const navigate = useNavigate();
  const createMutation = useMutation({
    mutationFn: createRecipe,
  });
  const updateMutation = useMutation({
    mutationFn: updateRecipe,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: recipe?.title || "",
      ingredients: recipe?.ingredients || "",
      time_required: recipe?.time_required.toString() || "",
      instructions: recipe?.instructions || "",
    },
  });

  async function onSubmit(res: z.infer<typeof formSchema>) {
    let response;
    const params: TRecipeDTO = {
      ...res,
      time_required: parseInt(res.time_required),
    };

    if (recipe) {
      response = await updateMutation.mutateAsync({
        params,
        id: recipe.id,
      });
    } else {
      response = await createMutation.mutateAsync(params);
    }

    if (response.status.toString().startsWith("2")) {
      if (recipe) {
        navigate(0);
      } else {
        navigate("/recipes/" + response.data.id);
      }
    }
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-0 mb-10">
        {children}
        <AccordionContent className="py-0 px-1">
          <Card className="mb-5 mt-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 "
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="shadcn"
                          {...field}
                          className="border-slate-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ingredients"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ingredients</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="shadcn"
                          {...field}
                          className="border-slate-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time_required"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time Taken (Minutes)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="shadcn"
                          {...field}
                          className="border-slate-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instructions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instrcutions</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="shadcn"
                          {...field}
                          className="border-slate-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default RecipeCardAction;
