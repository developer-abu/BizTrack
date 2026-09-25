import Sale from "../models/sales.models.js";


const getSalesHistory = async (shopId) => {
  const sales = await Sale.find({ shopId })
    .sort({ createdAt: -1 })
    .select(
  "_id buyerName buyerPhone buyerAddress items totalAmount paidAmount dueAmount paymentStatus createdAt"
)
    .lean();

  return sales;
};

export default getSalesHistory;