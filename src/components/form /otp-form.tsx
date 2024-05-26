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
import { toast } from "../ui/use-toast";
import { z } from "zod";
import { LogoHeader } from "../header/logo-header";
import { OTPSchema } from "@/utils/schemas/otp-schema ";
const OTPForm = ({
  onSuccess,
  message,
  onResendOTP,
}: {
  message?: string;
  onSuccess: Function;
  onResendOTP: Function;
}) => {
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
  });
  const onSubmit = (data: z.infer<typeof OTPSchema>) => {
    toast({
      description: (
        <pre className="mt-2  rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    onSuccess();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col gap-3 items-center my-4 lg:gap-3 lg:w-4/5"
      >
        <LogoHeader auth />
        <h1 className="font-semibold text-3xl mb-8  lg:my-4">
          We have sent OTP
        </h1>
        {message && (
          <p className="text-secondary-foreground/70 text-center lg:text-lg mt-4 lg:mt-6 ">
            {" "}
            {message}
          </p>
        )}
        <p className="text-secondary-foreground/70 text-center lg:text-lg mt-4 lg:mt-6 ">
          {" "}
          Please Enter you OTP to verfiry your self
        </p>
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="OTP" {...field} className="py-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mt-6 capitalize" type="submit">
          Verfiry
        </Button>

        <p className="font-semibold text-foreground/70">
          Don't Recieve OTP?
          <Button
            className="font-bold text-primary"
            variant={"link"}
            onClick={() => onResendOTP()}
          >
            Resend OTP
          </Button>
        </p>
      </form>
    </Form>
  );
};

export default OTPForm;
