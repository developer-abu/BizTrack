import updateStock from "../service/update.stock.service.js";

const controllerForStockUpdate = async (req, res, next) => {
  try {
    const product = await updateStock({
      productId: req.params.productId,
      stock: req.body.stock,
      shopId: req.shopId,
    });

    return res.status(200).json({
      success: true,
      message: "Stock updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerForStockUpdate;