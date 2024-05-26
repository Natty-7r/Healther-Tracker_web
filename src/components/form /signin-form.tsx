"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";
import { toast } from "../ui/use-toast";
import { z } from "zod";
import { SignInSchema } from "@/utils/schemas/signin-schema";
import { Checkbox } from "../ui/checkbox";
import { useNavigate } from "react-router-dom";
import { LogoHeader } from "../header/logo-header";
const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    toast({
      description: (
        <pre className="mt-2  rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    navigate("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col gap-3 items-center my-4 lg:gap-3 lg:w-4/5"
      >
        <LogoHeader auth />
        <h1 className="font-semibold text-3xl mb-8  lg:my-4">Welcome Back</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="py-6"
                  icon={<Mail className="text-secondary-foreground h-4 w-4" />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Password"
                  className="py-6"
                  {...field}
                  type="password"
                  icon={<Lock className="text-secondary-foreground h-4 w-4" />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-6" type="submit">
          Log In
        </Button>
        <div className="flex items-center justify-between w-full my-2">
          <div className="flex items-center gap-2">
            <Checkbox name="remember-me" id="remember-me" />
            <p className="text-sm text-foreground">Remember Me</p>
          </div>
          <a
            href={"/auth/forgot-password"}
            className="text-primary text-sm hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <p className="font-semibold text-foreground/70">
          Don't have an account?{" "}
          <a className="font-bold text-primary" href={"/auth/signup"}>
            Sign up
          </a>
        </p>
      </form>
    </Form>
  );
};

export default SignInForm;
