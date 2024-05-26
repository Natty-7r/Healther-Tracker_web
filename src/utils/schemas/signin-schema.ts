import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email({
    message: "Enter a Valid Email",
  }),
  password: z.string().min(8, {
    message: "password  must be at least 5 characters.",
  }),
});
