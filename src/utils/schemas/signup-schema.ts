import { z } from "zod";
export const SignUpSchema = z
  .object({
    firstName: z.string().min(3, {
      message: "first name must be at least 3 characters.",
    }),
    lastName: z.string().min(3, {
      message: "last name must be at least 3 characters.",
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
