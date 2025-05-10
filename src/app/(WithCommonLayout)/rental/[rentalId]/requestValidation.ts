import { z } from "zod";
export const requestSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }), // Name is required
  email: z.string().email({ message: "Invalid email address" }), // Email must be valid
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" }), // Phone number validation
  message: z.string().min(1, { message: "Message is required" }), // Message is required
});
