import deleteAccount from "../service/delete.account.service.js";

const controllerForAccountDeletion = async (req, res, next) => {
  try {
    const result = await deleteAccount(req.shopId);

    // Clear authentication cookie after successful deletion
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: result.message,
      data: {
        deletedProducts: result.deletedProducts,
        deletedSales: result.deletedSales,
      },
    });

  } catch (error) {
    next(error);
  }
};

export default controllerForAccountDeletion;