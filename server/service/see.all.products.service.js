import Product from "../models/products.models.js";


const getProducts = async (shopId) => {
  const products = await Product.find({ shopId });

  return products;
};

export default getProducts;