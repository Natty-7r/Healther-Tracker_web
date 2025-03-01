import { z } from "zod";

export const SignInSchema = z.object({
  emailOrUsername: z
    .string()
    .min(1, { message: "Email or Username is required." })
    .refine((val) => val.includes("@") || val.length >= 3, {
      message: "Enter a valid email or username.",
    }),
  password: z.string().min(4, {
    message: "Password must be at least 8 characters.",
  }),
});
