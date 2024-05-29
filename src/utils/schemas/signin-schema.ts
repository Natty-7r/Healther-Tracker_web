import { z } from "zod";

export const SignDoctorInSchema = z.object({
  email: z.string().email({
    message: "Enter a Valid Email",
  }),
  password: z.string().min(8, {
    message: "password  must be at least 5 characters.",
  }),
});
export const SignUserInSchema = z.object({
  controller_id: z.string().email({
    message: "Enter a Valid Email",
  }),
});
