import { z } from "zod";

const salesZodPaymentSchema = z.object({
  amountReceived: z
    .number()
    .positive("Amount must be greater than zero")
    .finite("Amount must be a valid number"),
});

export default salesZodPaymentSchema;