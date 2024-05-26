import { z } from "zod";

export const OTPSchema = z.object({
  otp: z.string().min(6, {
    message: "OTP is six digit",
  }),
});
