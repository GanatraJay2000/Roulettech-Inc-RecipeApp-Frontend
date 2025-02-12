import { register } from "../manager/auth/authServices";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { LuLoader2 } from "react-icons/lu";
import { cn } from "../lib/utils";
import ErrorAlert from "./ErrorAlert";

const formSchema = z
  .object({
    username: z.string().min(2),
    password: z.string().min(2),
    confirmPassword: z.string(),
    email: z.string().email(),
    first_name: z.string().min(2),
    last_name: z.string().min(2),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

function RegisterForm() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: register,
  });

  async function registerFn(params: z.infer<typeof formSchema>) {
    const response = await mutation.mutateAsync({ params });
    if (response.status === 200) {
      navigate("/");
    }
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      first_name: "",
      last_name: "",
    },
  });
  return (
    <Card>
      <h1 className="text-3xl font-bold mb-5">Register</h1>
      <ErrorAlert<typeof mutation> mutation={mutation} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(registerFn)} className="space-y-3">
          <div className="flex flex-col md:flex-row gap-5">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-slate-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-slate-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className="border-slate-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
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
            Register
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

export default RegisterForm;
