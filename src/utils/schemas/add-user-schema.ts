import { z } from "zod";
export const AddUserSchema = z.object({
  firstName: z.string().min(3, {
    message: "first name must be at least 3 characters.",
  }),
  lastName: z.string().min(3, {
    message: "last name must be at least 3 characters.",
  }),
  controllerId: z.string().email().min(1, {
    message: "controllerId  is required",
  }),
});
