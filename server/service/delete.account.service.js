import mongoose from "mongoose";



import shopRegister from './../models/register.models.js';
import Product from "../models/products.models.js";
import Sale from './../models/sales.models.js';

const deleteAccount = async (shopId) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // 1. Check whether the shop account exists
    const shop = await shopRegister.findById(shopId).session(session);

    if (!shop) {
      const error = new Error("Shop account not found");
      error.statusCode = 404;
      throw error;
    }

    // 2. Delete all products related to this shop
    const deletedProducts = await Product.deleteMany(
      { shopId },
      { session }
    );

    // 3. Delete all sales related to this shop
    const deletedSales = await Sale.deleteMany(
      { shopId },
      { session }
    );

    // 4. Delete the shop account itself
    const deletedShop = await shopRegister.deleteOne(
      { _id: shopId },
      { session }
    );

    // 5. Ensure the shop account was deleted
    if (deletedShop.deletedCount !== 1) {
      throw new Error("Failed to delete shop account");
    }

    // 6. Commit all deletions together
    await session.commitTransaction();

    return {
      success: true,
      message: "Account and all related data deleted successfully",
      deletedProducts: deletedProducts.deletedCount,
      deletedSales: deletedSales.deletedCount,
    };

  } catch (error) {
    // Roll back all database deletions
    if (session.inTransaction()) {
      await session.abortTransaction();
    }

    throw error;

  } finally {
    await session.endSession();
  }
};

export default deleteAccount;