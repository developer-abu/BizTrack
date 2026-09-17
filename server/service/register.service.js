import bcrypt from "bcrypt";
import shopRegister from './../models/register.models.js';


const registerShop = async ({shopName,email,phone,password,}) => {

  // Check if email is already registered
  const existingShop = await shopRegister.findOne({ email });

  if (existingShop) {
    throw new Error("Email is already registered");
  }

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create the shop
  const registeredShop = await shopRegister.create({
    shopName,
    email,
    phone,
    hashedPassword,
    isVerified: false,
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