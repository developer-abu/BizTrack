import updateSalePayment from "../service/update-sale-payment.service.js";

const controllerForSalePayment = async (req, res, next) => {
  try {
    const updatedSale = await updateSalePayment(
      req.shopId,
      req.params.saleId,
      req.body.amountReceived
    );

    return res.status(200).json({
      success: true,
      message: "Payment updated successfully",
      data: updatedSale,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerForSalePayment;