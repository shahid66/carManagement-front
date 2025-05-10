import { z } from "zod";

export const changePasswordSchema = z.object({
  email: z
  .string({ required_error: "Email is required" })
  .email("Invalid email address"),
  old_password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password must be at least 8 characters"),
  new_password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password must be at least 8 characters"),
  confirm_password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password must be at least 8 characters"),
});
