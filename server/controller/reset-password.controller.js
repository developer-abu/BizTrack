import resetPassword from "../service/reset-password.service.js";


const resetPasswordController = async (req, res) => {
  try {
    const result = await resetPassword(req.body);

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    if (error.message === "Invalid or expired password reset link") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Reset password error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to reset password",
    });
  }
};

export default resetPasswordController;