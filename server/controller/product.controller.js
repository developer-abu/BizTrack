import createProduct from "../service/product.service.js";
const controllerForProductCreation = async (req, res, next) => {
  try {
    const product = await createProduct({
      ...req.body,
      shopId: req.shopId,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerForProductCreation;