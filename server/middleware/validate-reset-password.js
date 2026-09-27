import resetPasswordZodSchema from "../validation/reset-password.zod.js";

const validateResetPassword = (req, res, next) => {
  const result = resetPasswordZodSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.issues,
    });
  }

  req.body = result.data;

  next();
};

export default validateResetPassword
;