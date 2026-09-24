import mongoose from "mongoose";

import Product from './../models/products.models.js';
import Sale from './../models/sales.models.js';

const createSale = async ({
  buyerName,
  buyerPhone,
  buyerAddress,
  items,
  paidAmount,
  shopId,
}) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // 1. Get product IDs
    const productIds = items.map((item) => item.productId);

    // 2. Load products belonging to authenticated shop
    const products = await Product.find({
      _id: { $in: productIds },
      shopId,
    }).session(session);

    // 3. Make sure every requested product exists
    if (products.length !== items.length) {
      throw new Error("One or more products were not found");
    }

    // 4. Create quick lookup map
    const productMap = new Map(
      products.map((product) => [
        product._id.toString(),
        product,
      ])
    );

    const saleItems = [];

    let totalAmount = 0;

    // 5. Validate stock and calculate sale items
    for (const item of items) {
      const product = productMap.get(item.productId);

      if (!product) {
        throw new Error("Product not found");
      }

      if (item.quantity > product.stock) {
        throw new Error(
          `Insufficient stock for ${product.productName}`
        );
      }

      const lineTotal =
        product.sellingPrice * item.quantity;

      totalAmount += lineTotal;

      saleItems.push({
        productId: product._id,
        productNameSnapshot: product.productName,
        quantity: item.quantity,
        unitPriceSnapshot: product.sellingPrice,
        lineTotal,
      });
    }

    // 6. Validate paid amount
    if (paidAmount > totalAmount) {
      throw new Error(
        "Paid amount cannot be greater than total amount"
      );
    }

    // 7. Calculate due amount
    const dueAmount = totalAmount - paidAmount;

    // 8. Determine payment status
    let paymentStatus;

    if (paidAmount === 0) {
      paymentStatus = "due";
    } else if (paidAmount < totalAmount) {
      paymentStatus = "partial";
    } else {
      paymentStatus = "paid";
    }

    // 9. Create sale document
    const [sale] = await Sale.create(
      [
        {
          shopId,

          buyerName,
          buyerPhone,
          buyerAddress,

          items: saleItems,

          totalAmount,
          paidAmount,
          dueAmount,
          paymentStatus,
        },
      ],
      { session }
    );

    // 10. Decrease stock
    for (const item of items) {
      const product = productMap.get(item.productId);

      const updatedProduct = await Product.findOneAndUpdate(
        {
          _id: product._id,
          shopId,
          stock: { $gte: item.quantity },
        },
        {
          $inc: {
            stock: -item.quantity,
          },
        },
        {
          new: true,
          session,
        }
      );

      if (!updatedProduct) {
        throw new Error(
          `Unable to update stock for ${product.productName}`
        );
      }
    }

    // 11. Commit transaction
    await session.commitTransaction();

    return {
      id: sale._id,
      shopId: sale.shopId,

      buyerName: sale.buyerName,
      buyerPhone: sale.buyerPhone,
      buyerAddress: sale.buyerAddress,

      items: sale.items,

      totalAmount: sale.totalAmount,
      paidAmount: sale.paidAmount,
      dueAmount: sale.dueAmount,
      paymentStatus: sale.paymentStatus,

      createdAt: sale.createdAt,
    };
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};

export default createSale;