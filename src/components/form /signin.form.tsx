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
import { SignInSchema } from "@/utils/schemas/signin.schema";
import { useAuthStore } from "@/utils/store/auth";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { LogoHeader } from "../header/logo-header";
import { toast } from "../ui/use-toast";
import { login as loginApi } from "@/services/auth.api";

const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });
  const { login } = useAuthStore();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    setLoading(true);
    const { status, message, data: result } = await loginApi(data);

    if (status == "fail") {
      setLoading(false);
      toast({
        variant: "destructive",
        description: message,
      });
    } else {
      const { accessToken, ...user } = result;
      setLoading(false);
      login(user, accessToken);
      setLoading(false);
      return navigate("/");
    }
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
          name="emailOrUsername"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Email or username"
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
        <Button className="w-full mt-6" type="submit" disabled={loading}>
          {loading ? "Logging in..." : " Log In"}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
