import forgotPassword from "../service/forgot-password.service.js";

const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await forgotPassword(email);

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Unable to process password reset request",
    });
  }
};

export default forgotPasswordController;