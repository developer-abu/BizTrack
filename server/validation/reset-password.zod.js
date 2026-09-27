
import { z } from "zod";

const resetPasswordZodSchema = z
  .object({
    token: z.string().min(1, "Reset token is required"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(12, "Password must not exceed 12 characters")
      .regex(/[a-z]/, "Password must contain a lowercase letter")
      .regex(/[A-Z]/, "Password must contain an uppercase letter")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain a special character"
      ),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export default resetPasswordZodSchema;