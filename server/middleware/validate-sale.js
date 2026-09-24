import saleZodSchema from './../validation/sale.zod.js';

const validateSale = (req, res, next) => {
  const result = saleZodSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  req.body = result.data;

  next();
};

export default validateSale;