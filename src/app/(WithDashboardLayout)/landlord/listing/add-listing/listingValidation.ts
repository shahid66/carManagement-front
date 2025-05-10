import { z } from "zod";

export const rentalFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  location: z.string().min(1, "Location is required"),
  details: z.string().min(1, "Details are required"),
  rent_amount: z.string().min(1, "Rent amount is required"),
  nof_bedroom: z.string().min(1, "Number of bedrooms is required"),
  category: z.string().min(1, "Category is required"),
});
