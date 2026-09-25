import Product from "../models/products.models.js";



const updateStock = async ({ productId, stock, shopId }) => {
  const product = await Product.findOneAndUpdate(
    {
      _id: productId,
      shopId,
    },
 {
  $inc: { stock },
},
    {
      new: true,
      runValidators: true,
    }
  );

  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  return {
    id: product._id,
    productName: product.productName,
    stock: product.stock,
    quantityType: product.quantityType,
    lowStockThreshold: product.lowStockThreshold,
  };
};

export default updateStock;