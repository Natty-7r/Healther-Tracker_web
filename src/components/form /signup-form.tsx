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
import { useRef, useState } from "react";
import OTPDialog from "../dialog/opt-dialog";
const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [openOTPModel, setOTPMOdalOpen] = useState(false);
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
  });

  const OTPBtnRef: any = useRef(null);
  // const navigate = useNavigate();
  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    toast({
      description: (
        <pre className="mt-2  rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setOTPMOdalOpen(true);
    // navigate("/auth/signin");
  };

  return (
    <Form {...form}>
      <OTPDialog openState={openOTPModel} setModalState={setOTPMOdalOpen} />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col gap-3 items-center  lg:gap-3 lg:w-4/5"
      >
        <LogoHeader auth />
        <h1 className="font-semibold text-3xl mb-4 ">Create Account</h1>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Full name" {...field} className="py-6" />
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
        <Button className="w-full mt-6" type="submit">
          Sign up
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
          Already have an account?{" "}
          <a className="font-bold text-primary" href={"/auth/signin"}>
            Log In
          </a>
        </p>
      </form>
    </Form>
  );
};

export default SignUpForm;
