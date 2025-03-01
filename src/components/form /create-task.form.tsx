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
import { createTask, getTasks } from "@/services/task.api";
import { CreateTaskSchema } from "@/utils/schemas/create-task.schema";
import { useAuthStore } from "@/utils/store/auth";
import { useState } from "react";
import { z } from "zod";
import { toast } from "../ui/use-toast";
import { useTaskStore } from "@/utils/store/task.store";

const CreateTaskForm = ({ onCreate }: { onCreate: Function }) => {
  const { accessToken } = useAuthStore();
  const { filter, setTasks } = useTaskStore();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof CreateTaskSchema>>({
    resolver: zodResolver(CreateTaskSchema),
  });

  const loadTasks = async () => {
    const { data, status: statusResponse } = await getTasks(
      { ...filter },
      accessToken || ""
    );
    if (statusResponse !== "fail") setTasks(data);

    setLoading(false);
  };

  const onSubmit = async (data: z.infer<typeof CreateTaskSchema>) => {
    setLoading(true);
    const { status, message } = await createTask(
      {
        name: data.name,
      },
      accessToken as string
    );

    if (status == "fail") {
      toast({
        variant: "destructive",
        description: message,
      });
    } else {
      await loadTasks();
      onCreate();
    }
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col gap-3 items-center  lg:gap-3 lg:w-4/5 pt-12"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Task name" {...field} className="py-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mt-6" type="submit" disabled={loading}>
          {loading ? "Creating task ..." : "Create "}
        </Button>
      </form>
    </Form>
  );
};

export default CreateTaskForm;
