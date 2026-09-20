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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Verified – BizTrack</title>
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
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td align="center" style="background:#1E40AF;padding:44px 48px 40px;">
              <table cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td align="center" valign="middle" width="64" height="64" style="width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,0.18);border:2px solid rgba(255,255,255,0.4);">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </td>
                </tr>
              </table>
              <p style="margin:0;color:#ffffff;font-size:26px;font-weight:300;line-height:1.3;font-family:Georgia,serif;">Your email is<br><em>verified.</em></p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px;">
              <p style="margin:0 0 14px;font-size:15px;color:#374151;line-height:1.6;font-family:Arial,sans-serif;">
                Hi <strong style="color:#111827;">${shop.shopName}</strong>,
              </p>
              <p style="margin:0 0 28px;font-size:15px;color:#4B5563;line-height:1.7;font-family:Arial,sans-serif;">
                We've confirmed your email address and your BizTrack account is fully active. You're all set to start managing your business.
              </p>

              <!-- Status badge -->
              <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:28px;">
                <tr>
                  <td style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:14px 18px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="14" style="padding-right:10px;">
                          <div style="width:9px;height:9px;border-radius:50%;background:#16A34A;"></div>
                        </td>
                        <td style="font-size:13.5px;color:#15803D;font-weight:600;font-family:Arial,sans-serif;">Account active &amp; ready to use</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:36px;">
                <tr>
                  <td align="center">
                    <a href="${envData.fr_url}/login" style="display:inline-block;background:#2563EB;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:14px 40px;border-radius:7px;font-family:Arial,sans-serif;">Log in to BizTrack</a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:24px;">
                <tr><td style="border-top:1px solid #E5E7EB;font-size:0;">&nbsp;</td></tr>
              </table>

              <p style="margin:0 0 16px;font-size:11px;color:#9CA3AF;font-weight:700;letter-spacing:1px;text-transform:uppercase;font-family:Arial,sans-serif;">What's next</p>

              <!-- Step 1 -->
              <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:14px;">
                <tr>
                  <td width="32" valign="top">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td align="center" valign="middle" width="22" height="22" style="width:22px;height:22px;border-radius:50%;background:#EFF6FF;border:1.5px solid #BFDBFE;">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 2V6L8.5 8.5" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round"/><circle cx="6" cy="6" r="5" stroke="#2563EB" stroke-width="1.2"/></svg>
                      </td>
                    </tr></table>
                  </td>
                  <td style="font-size:14px;color:#4B5563;line-height:1.5;font-family:Arial,sans-serif;padding-top:2px;">Set up your store profile and business details</td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:14px;">
                <tr>
                  <td width="32" valign="top">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td align="center" valign="middle" width="22" height="22" style="width:22px;height:22px;border-radius:50%;background:#EFF6FF;border:1.5px solid #BFDBFE;">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="2" y="3" width="8" height="6" rx="1" stroke="#2563EB" stroke-width="1.2"/><path d="M4 3V2.5C4 1.67 4.67 1 5.5 1H6.5C7.33 1 8 1.67 8 2.5V3" stroke="#2563EB" stroke-width="1.2"/></svg>
                      </td>
                    </tr></table>
                  </td>
                  <td style="font-size:14px;color:#4B5563;line-height:1.5;font-family:Arial,sans-serif;padding-top:2px;">Add your first products or inventory items</td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:8px;">
                <tr>
                  <td width="32" valign="top">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td align="center" valign="middle" width="22" height="22" style="width:22px;height:22px;border-radius:50%;background:#EFF6FF;border:1.5px solid #BFDBFE;">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 8L10 4" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </td>
                    </tr></table>
                  </td>
                  <td style="font-size:14px;color:#4B5563;line-height:1.5;font-family:Arial,sans-serif;padding-top:2px;">Track your sales and generate your first report</td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F9FAFB;border-top:1px solid #E5E7EB;padding:22px 48px;text-align:center;">
              <p style="margin:0;font-size:12.5px;color:#9CA3AF;line-height:1.6;font-family:Arial,sans-serif;">
                If you didn't create a BizTrack account, you can safely ignore this email.<br>
                Need help? <a href="#" style="color:#6B7280;text-decoration:none;">Contact support</a> &nbsp;·&nbsp; <a href="#" style="color:#6B7280;text-decoration:none;">Help center</a>
              </p>
              <p style="margin:10px 0 0;font-size:12px;color:#D1D5DB;font-family:Arial,sans-serif;">© 2026 BizTrack. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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