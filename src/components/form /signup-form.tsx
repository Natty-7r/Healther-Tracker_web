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
import { toast } from "../ui/use-toast";
import { z } from "zod";
import { Checkbox } from "../ui/checkbox";
// import { useNavigate } from "react-router-dom";
import { LogoHeader } from "../header/logo-header";
import { SignUpSchema } from "@/utils/schemas/signup-schema";
import { useState } from "react";
import OTPDialog from "../dialog/opt-dialog";
import { createDoctor } from "@/services/auth";
import { useEmailStore } from "@/utils/store/email";
const SignUpForm = () => {
  const { setEmail } = useEmailStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [openOTPModel, setOTPMOdalOpen] = useState(false);
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  // const navigate = useNavigate();
  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    setLoading(true);
    const { status, message } = await createDoctor({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
    });

    if (status == "fail") {
      toast({
        variant: "destructive",
        description: message,
      });
    } else {
      setEmail(data.email);
      setLoading(false);
      return setOTPMOdalOpen(true);
    }
  };

  return (
    <Form {...form}>
      <OTPDialog openState={openOTPModel} setModalState={setOTPMOdalOpen} />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col gap-3 items-center  lg:gap-3 lg:w-4/5 "
      >
        <LogoHeader auth />
        <h1 className="font-semibold text-base  sm:text-3xl sm:mb-4 ">
          Signup as Doctor
        </h1>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="First name" {...field} className="py-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Last name" {...field} className="py-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Email" {...field} className="py-6" />
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
                  className="py-5 sm:py-6"
                  placeholder="Password"
                  hasNoEyeIcon
                  {...field}
                  type="password"
                  passwordVisble={showPassword}
                  icon={<Lock className=" h-4 w-4" />}
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
                  icon={<Lock className="text-black h-4 w-4" />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-6" type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </Button>
        <div className="flex items-center justify-between w-full my-2">
          <div className="flex items-center gap-2">
            <Checkbox
              name="remember-me"
              id="remember-me"
              onCheckedChange={(value) => {
                if (value) return setShowPassword(true);
                return setShowPassword(false);
              }}
            />
            <p className="text-sm text-foreground capitalize">Show Password</p>
          </div>
        </div>
        <p className="font-semibold text-foreground/70">
          <div className="flex gap-4  text-xs  sm:text-base">
            Already have an account?{" "}
            <a className=" font-bold text-primary" href={"/auth/signin-user"}>
              Log In as User
            </a>{" "}
            |
            <a className="font-bold text-primary" href={"/auth/signin-doctor"}>
              Log In as Doctor
            </a>
          </div>
        </p>
      </form>
    </Form>
  );
};

export default SignUpForm;
