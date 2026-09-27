import forgotPasswordZodSchema from "../validation/forgot-password.zod.js";


const validateForgotPassword = (req, res, next) => {
  const result = forgotPasswordZodSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.issues,
    });
  }

  req.body = result.data;

  next();
};

export default validateForgotPassword;