import salesZodPaymentSchema from "../validation/payment.update.zod.js";

const validateSalesPayment = (req, res, next) => {
  const result = salesZodPaymentSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  req.body = result.data;

  next();
};

export default validateSalesPayment;