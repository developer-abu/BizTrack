import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import shopRegister from './../models/register.models.js';
import envData from "../config/config.js";

const loginShop = async ({ email, password }) => {
  // Find shop by email
  const shop = await shopRegister.findOne({ email });

  // If shop does not exist
  if (!shop) {
    throw new Error("Invalid email or password");
  }

  // Check whether email is verified
  if (!shop.isVerified) {
    throw new Error("Please verify your email before logging in");
  }

  // Compare entered password with hashed password
  const isPasswordCorrect = await bcrypt.compare(
    password,
    shop.hashedPassword
  );

  // If password is incorrect
  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }

  // Create JWT token
  const token = jwt.sign(
    {
      shopId: shop._id,
    },
    envData.jwt_secret,
    {
      expiresIn: envData.jwt_exp,
    }
  );

  return {
    token,
    shop: {
      id: shop._id,
      shopName: shop.shopName,
      email: shop.email,
      phone: shop.phone,
      isVerified: shop.isVerified,
    },
  };
};

export default loginShop;