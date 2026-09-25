import getSalesHistory from "../service/sales-history.service.js";


const controllerForSalesHistory = async (req, res, next) => {
  try {
    const sales = await getSalesHistory(req.shopId);

    return res.status(200).json({
      success: true,
      message: "Sales history fetched successfully",
      data: sales,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerForSalesHistory;