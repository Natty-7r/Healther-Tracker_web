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
// import { useNavigate } from "react-router-dom";
import { LogoHeader } from "../header/logo-header";
import { useState } from "react";
import { AddUserSchema } from "@/utils/schemas/add-user-schema";
import { createUser } from "@/services/user";
import { useNavigate } from "react-router";
import { useUserStore } from "@/utils/store/user";
const CreateUserForm = () => {
  const { token } = useUserStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof AddUserSchema>>({
    resolver: zodResolver(AddUserSchema),
  });

  // const navigate = useNavigate();
  const onSubmit = async (data: z.infer<typeof AddUserSchema>) => {
    setLoading(true);
    const { status, message } = await createUser(
      {
        first_name: data.firstName,
        last_name: data.lastName,
        controller_id: data.controllerId,
      },
      token as string
    );

    if (status == "fail") {
      toast({
        variant: "destructive",
        description: message,
      });
    } else {
      setLoading(false);
      return navigate("/users");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col gap-3 items-center  lg:gap-3 lg:w-4/5"
      >
        <LogoHeader auth />
        <h1 className="font-semibold text-3xl mb-4 ">Create User</h1>
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
          name="controllerId"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Controller ID"
                  {...field}
                  className="py-6"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mt-6" type="submit" disabled={loading}>
          {loading ? "Creating user ..." : "Create user"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateUserForm;
