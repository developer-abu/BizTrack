import envData from "../config/config.js";
import shopRegister from "../models/register.models.js";

const verifyEmail = async (token) => {
  const emailSendingUrl = envData.email_url
  // Find shop using verification token
  const shop = await shopRegister.findOne({
    verificationToken: token,
  });

  // Token not found
  if (!shop) {
    throw new Error("Invalid verification link");
  }

  // Check token expiry
  if (shop.verificationTokenExpires < new Date()) {
    throw new Error("Verification link has expired");
  }


  // Verify email
  shop.isVerified = true;

  // Remove token after successful verification
  shop.verificationToken = null;
  shop.verificationTokenExpires = null;

  await shop.save();


  // Send confirmation email
  const emailHtml = `
    <h2>Email Verified Successfully</h2>
    <p>Hello ${shop.shopName},</p>
    <p>
      Your BizTrack email has been successfully verified.
      Your account is now active.
    </p>
    <p>You can now log in to your BizTrack account.</p>
  `;

try {
    await fetch(emailSendingUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: shop.email,
      subject: "Your BizTrack account is verified",
      html: emailHtml,
    }),
  });
} catch (error) {
  
}


  return {
    message: "Email verified successfully",
  };
};

export default verifyEmail;