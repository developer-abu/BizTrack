import { z } from "zod";

const registerSchema = z.object({
    shopName: z
      .string()
      .trim()
      .min(5, "Shop name is required")
      .regex(/^[A-Za-z ]+$/, "Shop name can only contain letters and spaces"),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address"),

    phone: z
      .string()
      .trim()
      .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),

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

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default registerSchema;