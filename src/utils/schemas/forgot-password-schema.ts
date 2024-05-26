import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Enter a Valid Email",
  }),
});

export const PasswordSchema = z
  .string()
  .min(6, { message: "Password must be at least 6` characters long." });

export const UpdatePasswordSchema = z
  .object({
    password: PasswordSchema,
    confirmPassword: z.string().min(8, {
      message: "Confirm password must be at least 8 characters long.",
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );
