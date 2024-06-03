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
import { Mail } from "lucide-react";
import { toast } from "../ui/use-toast";
import { z } from "zod";
import { SignUserInSchema } from "@/utils/schemas/signin-schema";
import { Checkbox } from "../ui/checkbox";
import { useNavigate } from "react-router-dom";
import { LogoHeader } from "../header/logo-header";
import { loginAsUser } from "@/services/auth";
import { useUserStore } from "@/utils/store/user";
import { useState } from "react";
import { useDoctorStore } from "@/utils/store/doctor";
const SignInForm = () => {
  const { setUser } = useDoctorStore();
  const { login } = useUserStore();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof SignUserInSchema>>({
    resolver: zodResolver(SignUserInSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof SignUserInSchema>) => {
    setLoading(true);
    const {
      status,
      message,
      data: result,
    } = await loginAsUser({ controller_id: data.controller_id });

    if (status == "fail") {
      setLoading(false);
      toast({
        variant: "destructive",
        description: message,
      });
    } else {
      setLoading(false);
      const { user_data, ...rest } = result.user;
      login({ token: result.token, role: "USER", ...rest });
      setUser({ token: result.token, role: "USER", ...result.user });
      setLoading(false);
      return navigate("/user-detail");
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
          name="controller_id"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Controller Id"
                  {...field}
                  className="py-6"
                  icon={<Mail className="text-secondary-foreground h-4 w-4" />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mt-6" type="submit" disabled={loading}>
          {loading ? "Loggin in" : " Log In"}
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
          <div className="flex gap-4">
            Don't have an account? |
            <a className="font-bold text-primary" href={"/auth/signin-doctor"}>
              Log In as Doctor
            </a>
          </div>
          <a className="font-bold text-primary" href={"/auth/signup"}>
            Sign up
          </a>
        </p>
      </form>
    </Form>
  );
};

export default SignInForm;
