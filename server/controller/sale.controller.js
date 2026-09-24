import createSale from './../service/sale.service.js';
const controllerForSaleCreation = async (req, res, next) => {
  try {
    const sale = await createSale({
      ...req.body,
      shopId: req.shopId,
    });

    return res.status(201).json({
      success: true,
      message: "Sale created successfully",
      data: sale,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerForSaleCreation;