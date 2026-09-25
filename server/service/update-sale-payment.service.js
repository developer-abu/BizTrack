import Sale from "../models/sales.models.js";

const updateSalePayment = async (shopId, saleId, amountReceived) => {
  // 1. Find sale belonging to this shop
  const sale = await Sale.findOne({
    _id: saleId,
    shopId,
  });

  if (!sale) {
    const error = new Error("Sale not found");
    error.statusCode = 404;
    throw error;
  }

  // 2. Check whether payment is already completed
  if (sale.dueAmount <= 0) {
    const error = new Error("No due amount remaining");
    error.statusCode = 400;
    throw error;
  }

  // 3. Check received amount against due amount
  if (amountReceived > sale.dueAmount) {
    const error = new Error(
      `Amount cannot be greater than due amount of ${sale.dueAmount}`
    );

    error.statusCode = 400;
    throw error;
  }

  // 4. Calculate updated payment
  const newPaidAmount = sale.paidAmount + amountReceived;

  const newDueAmount = sale.totalAmount - newPaidAmount;

  // 5. Update payment status
  const newPaymentStatus =
    newDueAmount === 0
      ? "paid"
      : newPaidAmount > 0
        ? "partial"
        : "due";

  // 6. Save updated payment details
  sale.paidAmount = newPaidAmount;
  sale.dueAmount = newDueAmount;
  sale.paymentStatus = newPaymentStatus;

  await sale.save();

  // 7. Return updated sale
  return sale;
};

export default updateSalePayment;