import Product from "../models/products.models.js";

const createProduct = async ({
  productName,
  buyingPrice,
  sellingPrice,
  mrp,
  discount,
  stock,
  quantityType,
  lowStockThreshold,
  manufacturingDate,
  expiryDate,
  shopId,
}) => {
  const product = await Product.create({
    productName,
    buyingPrice,
    sellingPrice,
    mrp,
    discount,
    stock,
    quantityType,
    lowStockThreshold,
    manufacturingDate,
    expiryDate,
    shopId,
  });

  return {
    id: product._id,
    productName: product.productName,
    buyingPrice: product.buyingPrice,
    sellingPrice: product.sellingPrice,
    mrp: product.mrp,
    discount: product.discount,
    stock: product.stock,
    quantityType: product.quantityType,
    lowStockThreshold: product.lowStockThreshold,
    manufacturingDate: product.manufacturingDate,
    expiryDate: product.expiryDate,
    shopId: product.shopId,
  };
};

export default createProduct;