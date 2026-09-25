import createSale from './../service/sale.service.js';
const controllerForSaleCreation = async (req, res, next) => {
  try {
    const sale = await createSale({
      ...req.body,
      shopId: req.shopId,
    });

    return res.status(201).json({
      success: true,
      message: "Sale created successfully. Wait few Second, we will redirect you to sales history page where you can download invoice",
      data: sale,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerForSaleCreation;