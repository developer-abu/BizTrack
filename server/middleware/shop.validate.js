import registerSchema from "../validation/register.zod.js";
const validateRegister = (req, res, next) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,      
    });
 
  }

  next();
};

export default validateRegister