import loginZodSchema from './../validation/login.zod.js';

const validateLogin = (req, res, next) => {
  const result = loginZodSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  next();
};

export default validateLogin;