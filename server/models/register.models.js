import mongoose from "mongoose";

const schemaForShopRegistration = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    hashedPassword: {
      type: String,
      required: true,
    },

    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    verificationToken: {
  type: String,
  default: null,
},

verificationTokenExpires: {
  type: Date,
  default: null,
  index: {
  expireAfterSeconds: 0,
},
},
  },
  {
    timestamps: true,
  }
);

const shopRegister = mongoose.model("shopRegister", schemaForShopRegistration);

export default shopRegister;