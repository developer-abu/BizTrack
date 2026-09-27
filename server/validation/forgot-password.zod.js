
import { z } from "zod";

const forgotPasswordZodSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .transform((email) => email.toLowerCase()),
});

export default forgotPasswordZodSchema;