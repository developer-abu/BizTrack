import productZodSchema from "../validation/product.zod.js";

const validateProduct = (req, res, next) => {
  const result = productZodSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  next();
};

export default validateProduct;