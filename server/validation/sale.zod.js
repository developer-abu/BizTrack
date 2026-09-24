import { z } from "zod";

const saleZodSchema = z.object({
  buyerName: z
    .string()
    .trim()
    .min(1, "Buyer name is required"),

  buyerPhone: z
    .string()
    .trim()
    .min(1, "Buyer phone is required"),

  buyerAddress: z
    .string()
    .trim()
    .min(1, "Buyer address is required"),

  items: z
    .array(
      z.object({
        productId: z.string().min(1, "Product ID is required"),

        quantity: z.coerce
          .number()
          .int()
          .min(1, "Quantity must be at least 1"),
      })
    )
    .min(1, "At least one product is required"),

  paidAmount: z.coerce
    .number()
    .min(0, "Paid amount cannot be negative"),
});

export default saleZodSchema;