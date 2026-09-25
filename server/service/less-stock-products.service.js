import Product from "../models/products.models.js";


const seeLessStockProducts = async (shopId) => {
  const products = await Product.find({
    shopId,
    $expr: {
      $lte: ["$stock", "$lowStockThreshold"],
    },
  }).select(
    "productName stock lowStockThreshold quantityType"
  );

  return products;
};

export default seeLessStockProducts;