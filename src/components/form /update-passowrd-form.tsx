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
import { Lock } from "lucide-react";

// import { toast } from "../ui/use-toast";
import { z } from "zod";
import { useState } from "react";
import { UpdatePasswordSchema } from "@/utils/schemas/forgot-password-schema";
import { LogoHeader } from "../header/logo-header";

const UpdatePasswordForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const form = useForm<z.infer<typeof UpdatePasswordSchema>>({
    resolver: zodResolver(UpdatePasswordSchema),
  });

  const onSubmit = (data: z.infer<typeof UpdatePasswordSchema>) => {
    console.log(data);
  };

  if (true) {
    // router.push('/auth/sign-in')
  }
  if (false) {
    // toast({
    //   variant: "destructive",
    //   description: error?.message,
    // });
  }

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
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="py-5 sm:py-6"
                  placeholder="New password"
                  {...field}
                  type="password"
                  passwordVisble={showPassword}
                  onClickIcon={() => {
                    setShowPassword(!showPassword);
                  }}
                  icon={<Lock className="text-secondary h-4 w-4" />}
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
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="py-5 sm:py-6"
                  placeholder="Confirm Password"
                  hasNoEyeIcon
                  {...field}
                  type="password"
                  passwordVisble={showPassword}
                  icon={<Lock className="text-secondary h-4 w-4" />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size={"sm"}
          disabled={false}
          className="w-full py-[1.2rem] md:py-[1.5rem] py-5  mt-12  mx-auto text-sm"
        >
          {false ? "   Updating Password... " : "   Update Password"}
        </Button>{" "}
      </form>
    </Form>
  );
};

export default UpdatePasswordForm;
