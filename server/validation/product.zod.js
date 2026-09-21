import { z } from "zod";

const productZodSchema = z.object({
  productName: z
    .string()
    .trim()
    .min(3, "Product name is required with at least 3 character"),

  buyingPrice: z.coerce
    .number()
    .min(0, "Buying price cannot be negative"),

  sellingPrice: z.coerce
    .number()
    .min(0, "Selling price cannot be negative"),

  mrp: z.coerce
    .number()
    .min(0, "MRP cannot be negative"),

  discount: z.coerce
    .number()
    .min(0, "Discount cannot be negative"),

  stock: z.coerce
    .number()
    .min(0, "Stock cannot be negative"),

  quantityType: z.enum([
    "pieces",
    "kg",
    "g",
    "liter",
    "packet",
    "box",
    "bottle",
  ]),

  lowStockThreshold: z.coerce
    .number()
    .min(0, "Low stock threshold cannot be negative"),

  manufacturingDate: z.coerce.date({
    message: "Manufacturing date is required",
  }),

  expiryDate: z.coerce.date({
    message: "Expiry date is required",
  }),
});

export default productZodSchema;