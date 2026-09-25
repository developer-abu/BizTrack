
import seeLessStockProducts from './../service/less-stock-products.service.js';


const controllerForLessStockProducts = async (
  req,
  res,
  next
) => {
  try {
    const products = await seeLessStockProducts(req.shopId);

    return res.status(200).json({
      success: true,
      message: "Low stock products fetched successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerForLessStockProducts;