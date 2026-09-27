
import crypto from "crypto";
import bcrypt from "bcrypt";
import shopRegister from './../models/register.models.js';



const resetPassword = async ({ token, password }) => {
  // Hash the token received from the reset link
  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  // Find shop using hashed token and check expiry
  const shop = await shopRegister.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordTokenExpires: { $gt: new Date() },
    isVerified: true,
  });

  // Reject invalid or expired token
  if (!shop) {
    throw new Error("Invalid or expired password reset link");
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Update password
  shop.hashedPassword = hashedPassword;

  // Remove reset token after successful password reset
  shop.resetPasswordToken = null;
  shop.resetPasswordTokenExpires = null;

  await shop.save();

  return {
    message: "Password has been reset successfully",
  };
};

export default resetPassword;