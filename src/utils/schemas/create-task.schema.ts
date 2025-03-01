import { z } from "zod";

export const CreateTaskSchema = z.object({
  name: z.string().min(3, {
    message: "Task name must be at least 3 characters.",
  }),
});
