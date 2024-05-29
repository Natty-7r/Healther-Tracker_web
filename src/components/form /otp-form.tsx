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
import { verifyUser } from "@/services/auth";
import { useEmailStore } from "@/utils/store/email";
import { useState } from "react";
const OTPForm = ({
  onSuccess,
  message,
}: {
  message?: string;
  onSuccess: Function;
  onResendOTP: Function;
}) => {
  const { email } = useEmailStore();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
  });
  const onSubmit = async (data: z.infer<typeof OTPSchema>) => {
    setLoading(true);
    const { status, message } = await verifyUser({
      otp: data.otp,
      email,
    });

    console.log(status, message);
    if (status == "fail") {
      setLoading(false);
      toast({
        variant: "destructive",
        description: message,
      });
    } else {
      setLoading(false);
      onSuccess();
    }
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
          {loading ? "Verifying ..." : "Verfiy"}
        </Button>
      </form>
    </Form>
  );
};

export default OTPForm;
