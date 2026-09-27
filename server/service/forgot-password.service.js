import crypto from "crypto";
import shopRegister from './../models/register.models.js';
import envData from './../config/config.js';


const forgotPassword = async (email) => {
  // Normalize email
  const normalizedEmail = email.trim().toLowerCase();

  // Find shop using email
  const shop = await shopRegister.findOne({
    email: normalizedEmail,
    isVerified: true,
  });

  // Return the same response if email does not exist
  if (!shop) {
    return {
      message:
        "If an account exists with this email, a password reset link has been sent.",
    };
  }

  // Generate a secure random reset token
  const resetPasswordToken = crypto
    .randomBytes(32)
    .toString("hex");

  // Hash the token before saving it to the database
  const hashedResetPasswordToken = crypto
    .createHash("sha256")
    .update(resetPasswordToken)
    .digest("hex");

  // Set token expiry to 15 minutes
  const resetPasswordTokenExpires = new Date(
    Date.now() + 15 * 60 * 1000
  );

  // Save hashed token and expiry
  shop.resetPasswordToken = hashedResetPasswordToken;
  shop.resetPasswordTokenExpires = resetPasswordTokenExpires;

  await shop.save();

  // Create password reset link
  const resetLink =
    `${envData.fr_url}/reset-password?token=${resetPasswordToken}`;

  // Create email template
  const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Your Password – BizTrack</title>
</head>

<body style="margin:0;padding:0;background-color:#F0F2F5;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 16px;">
    <tr>
      <td align="center">

        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <span style="font-size:22px;font-weight:700;color:#1A1D23;">
                Biz<span style="color:#2563EB;">Track</span>
              </span>
            </td>
          </tr>
        </table>

        <table width="100%" cellpadding="0" cellspacing="0"
          style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;">

          <tr>
            <td align="center"
              style="background:#1E3A8A;padding:44px 32px 40px;">

              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:600;line-height:1.3;">
                Reset your<br/>password.
              </h1>

            </td>
          </tr>

          <tr>
            <td style="padding:40px 32px;">

              <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6;">
                Hi <strong style="color:#1A1D23;">
                  ${shop.shopName}
                </strong>,
              </p>

              <p style="margin:0 0 28px;font-size:15px;color:#4B5563;line-height:1.7;">
                We received a request to reset the password for your BizTrack account.
                Click the button below to choose a new password.
              </p>

              <table cellpadding="0" cellspacing="0"
                style="width:100%;margin-bottom:28px;">
                <tr>
                  <td style="background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px;padding:13px 18px;">
                    <p style="margin:0;font-size:13.5px;color:#9A3412;line-height:1.6;">
                      This password reset link expires in
                      <strong>15 minutes</strong>.
                    </p>
                  </td>
                </tr>
              </table>

              <table cellpadding="0" cellspacing="0"
                style="width:100%;margin-bottom:32px;">
                <tr>
                  <td align="center">
                    <a href="${resetLink}"
                      style="display:inline-block;background:#2563EB;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:14px 40px;border-radius:7px;">
                      Reset My Password
                    </a>
                  </td>
                </tr>
              </table>

              <table cellpadding="0" cellspacing="0"
                style="width:100%;border-top:1px solid #E5E7EB;padding-top:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;font-size:12px;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.7px;font-weight:600;">
                      Button not working?
                    </p>

                    <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.6;">
                      Copy and paste this link into your browser:
                    </p>

                    <p style="margin:8px 0 0;font-size:12.5px;color:#2563EB;word-break:break-all;">
                      ${resetLink}
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <tr>
            <td style="background:#F9FAFB;border-top:1px solid #E5E7EB;padding:22px 32px;text-align:center;">
              <p style="margin:0;font-size:12.5px;color:#9CA3AF;line-height:1.6;">
                If you did not request a password reset, you can safely ignore this email.
                Your password will remain unchanged.
              </p>

              <p style="margin:8px 0 0;font-size:12px;color:#D1D5DB;">
                © 2026 BizTrack · This is an automated message, please do not reply.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

  // Send reset email through Google Apps Script
  const response = await fetch(envData.email_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: shop.email,
      subject: "Reset your BizTrack password",
      html: emailHtml,
    }),
  });

  // Handle HTTP errors from the email endpoint
  if (!response.ok) {
    throw new Error("Failed to send password reset email");
  }

  return {
    message:
      "If an account exists with this email, a password reset link has been sent.",
  };
};

export default forgotPassword;