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
import { useNavigate } from "react-router-dom";
import { LogoHeader } from "../header/logo-header";
import { ForgotPasswordSchema } from "@/utils/schemas/forgot-password-schema";
const ForgotPasswordOTPFrom = () => {
  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data: z.infer<typeof ForgotPasswordSchema>) => {
    toast({
      description: (
        <pre className="mt-2  rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    navigate("/auth/verify-otp");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col gap-3 items-center my-4 lg:gap-3 lg:w-4/5"
      >
        <LogoHeader auth />
        <h1 className="font-semibold text-3xl mb-8  lg:my-4">Welcome Back</h1>
        <p className="text-secondary-foreground/70 text-center lg:text-lg mt-4 lg:mt-6 ">
          {" "}
          Enter your email address and you will recieve verification code to
          reset your passwrod{" "}
        </p>
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

        <Button className="w-full mt-6 capitalize" type="submit">
          next
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordOTPFrom;
