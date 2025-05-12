import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({ required_error: "Name is required" }),

  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),

  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password must be at least 8 characters"),
  passwordConfirm: z
    .string({ required_error: "Password Confirmation is required" })
    .min(1),
});
