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
  Date.now() + 1 * 60 * 1000
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

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Verify Your Email</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #f4f7fb;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          style="padding: 40px 15px;"
        >
          <tr>
            <td align="center">

              <!-- Main Container -->
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                  max-width: 600px;
                  background-color: #ffffff;
                  border-radius: 12px;
                  overflow: hidden;
                "
              >

                <!-- Header -->
                <tr>
                  <td
                    style="
                      padding: 28px 35px;
                      background-color: #111827;
                      text-align: center;
                    "
                  >
                    <h1
                      style="
                        margin: 0;
                        color: #ffffff;
                        font-size: 28px;
                        letter-spacing: 1px;
                      "
                    >
                      BizTrack
                    </h1>

                    <p
                      style="
                        margin: 8px 0 0;
                        color: #d1d5db;
                        font-size: 14px;
                      "
                    >
                      Smart Business Management
                    </p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px 35px;">

                    <h2
                      style="
                        margin: 0 0 15px;
                        color: #111827;
                        font-size: 24px;
                      "
                    >
                      Verify your email address
                    </h2>

                    <p
                      style="
                        margin: 0 0 18px;
                        color: #4b5563;
                        font-size: 15px;
                        line-height: 1.7;
                      "
                    >
                      Welcome to BizTrack! We're excited to have you
                      with us. Please verify your email address to
                      complete your registration and activate your
                      account.
                    </p>

                    <!-- Verification Button -->
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      style="margin: 30px auto;"
                    >
                      <tr>
                        <td
                          style="
                            border-radius: 8px;
                            background-color: #111827;
                          "
                        >
                          <a
                            href="${verificationLink}"
                            style="
                              display: inline-block;
                              padding: 14px 28px;
                              color: #ffffff;
                              text-decoration: none;
                              font-size: 15px;
                              font-weight: bold;
                              border-radius: 8px;
                            "
                          >
                            Verify Email Address
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p
                      style="
                        margin: 0 0 10px;
                        color: #6b7280;
                        font-size: 13px;
                        line-height: 1.6;
                      "
                    >
                      This verification link will expire in
                      <strong>15 minutes</strong>.
                    </p>

                    <p
                      style="
                        margin: 25px 0 0;
                        color: #6b7280;
                        font-size: 13px;
                        line-height: 1.6;
                      "
                    >
                      If you did not create a BizTrack account,
                      you can safely ignore this email.
                    </p>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td
                    style="
                      padding: 22px 35px;
                      background-color: #f9fafb;
                      text-align: center;
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        color: #9ca3af;
                        font-size: 12px;
                      "
                    >
                      © 2026 BizTrack. All rights reserved.
                    </p>

                    <p
                      style="
                        margin: 8px 0 0;
                        color: #9ca3af;
                        font-size: 12px;
                      "
                    >
                      This is an automated email. Please do not reply.
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