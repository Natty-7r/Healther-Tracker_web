import { z } from "zod";
export const SignUpSchema = z
  .object({
    fullName: z.string().min(8, {
      message: "Username must be at least 8 characters.",
    }),
    email: z.string().email().min(1, {
      message: "Email is required",
    }),
    password: z.string().min(8, {
      message: "password is required",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords mismatch",
    path: ["confirmPassword"], // path of error
  });
