import { z } from "zod";

export const CategoriesValidation = z.object({
  id: z.number().optional(),
  name: z.string().min(5).max(255),
  image_url: z.string().max(255).optional(),
  created_at: z.date().optional(),
});
