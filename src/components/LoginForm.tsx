import { login } from "../manager/auth/authServices";
import { useAuth } from "../manager/auth/authProvider";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LuLoader2 } from "react-icons/lu";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Card from "./Card";
import { cn } from "../lib/utils";
import ErrorAlert from "./ErrorAlert";

const formSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(2),
});

function LoginForm() {
  const ctx = useAuth();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
  });

  async function loginFn(params: z.infer<typeof formSchema>) {
    const response = await mutation.mutateAsync({ params, ctx });
    if (response.status === 200) {
      navigate("/recipes");
    }
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <Card>
      <h1 className="text-3xl font-bold mb-5">Login</h1>
      <ErrorAlert<typeof mutation> mutation={mutation} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(loginFn)} className="space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} className="border-slate-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    className="border-slate-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="px-7">
            Login{" "}
            <LuLoader2
              className={cn(`hidden ml-2 animate-spin`, {
                block: mutation.isPending,
              })}
            />
          </Button>
        </form>
      </Form>
    </Card>
  );
}

export default LoginForm;
