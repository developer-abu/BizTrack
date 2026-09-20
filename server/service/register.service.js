import bcrypt from "bcrypt";
import crypto from "crypto";
import shopRegister from './../models/register.models.js';
import envData from "../config/config.js";


const registerShop = async ({shopName,email,phone,password,}) => {

  // Check if email is already registered
  const existingShop = await shopRegister.findOne({ email });

  if (existingShop) {
    throw new Error("Email is already registered");
  }
//random verification token
const verificationToken = crypto.randomBytes(32).toString("hex");

const verificationTokenExpires = new Date(
  Date.now() + 15 * 60 * 1000
);

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create the shop
  const registeredShop = await shopRegister.create({
    shopName,
    email,
    phone,
    hashedPassword,
    isVerified: false,
    verificationToken,
    verificationTokenExpires
  });
// verification link creation
const verificationLink=`${envData.fr_url}/verify-email?token=${verificationToken}`
// sending verification link 

try {
  const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your Email – BizTrack</title>
</head>
<body style="margin:0;padding:0;background-color:#F0F2F5;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 16px;">
    <tr>
      <td align="center">

        <!-- Brand -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <span style="font-size:22px;font-weight:700;color:#1A1D23;">Biz<span style="color:#2563EB;">Track</span></span>
            </td>
          </tr>
        </table>

        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td align="center" style="background:linear-gradient(135deg,#1E3A8A 0%,#2563EB 100%);padding:44px 48px 40px;">
              <table cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td align="center" style="width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,0.15);border:2px solid rgba(255,255,255,0.35);">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" stroke-width="2"/>
                      <path d="M3 7L12 13L21 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </td>
                </tr>
              </table>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:300;line-height:1.3;">
                Confirm your<br><em>email address.</em>
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px;">

              <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6;">
                Hi <strong style="color:#1A1D23;">${registeredShop.shopName}</strong>,
              </p>

              <p style="margin:0 0 28px;font-size:15px;color:#4B5563;line-height:1.7;">
                Thanks for signing up for BizTrack. Click the button below to verify your email address and activate your account.
              </p>

              <!-- Expiry notice -->
              <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:28px;">
                <tr>
                  <td style="background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px;padding:13px 18px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:10px;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="9" stroke="#EA580C" stroke-width="2"/>
                            <path d="M12 7V12" stroke="#EA580C" stroke-width="2" stroke-linecap="round"/>
                            <circle cx="12" cy="15.5" r="1" fill="#EA580C"/>
                          </svg>
                        </td>
                        <td style="font-size:13.5px;color:#9A3412;font-weight:500;">
                          This link expires in <strong>15 minutes</strong>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:32px;">
                <tr>
                  <td align="center">
                    <a href="${verificationLink}" style="display:inline-block;background:#2563EB;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:14px 40px;border-radius:7px;">
                      Verify My Email
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Fallback link -->
              <table cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid #E5E7EB;padding-top:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;font-size:12px;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.7px;font-weight:600;">Button not working?</p>
                    <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.6;">Copy and paste this link into your browser:</p>
                    <p style="margin:8px 0 0;font-size:12.5px;color:#2563EB;word-break:break-all;">${verificationLink}</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F9FAFB;border-top:1px solid #E5E7EB;padding:22px 48px;text-align:center;">
              <p style="margin:0;font-size:12.5px;color:#9CA3AF;line-height:1.6;">
                If you didn't create a BizTrack account, you can safely ignore this email.
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

  // Send verification email through Google Apps Script
  await fetch(envData.email_url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      to: email,
      subject: "Verify your BizTrack account",
      html: emailHtml,
    }),
  });
} catch (error) {
  console.log("error")
}

  // Return only safe data
  return {
    id: registeredShop._id,
    shopName: registeredShop.shopName,
    email: registeredShop.email,
    phone: registeredShop.phone,
    isVerified: registeredShop.isVerified,
  };
};

export default registerShop;