import loginShop from "../service/login.service.js";

const controllerForShopLogin = async (req, res, next) => {
  try {
    const result = await loginShop(req.body);

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 14 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful, Redirecting to dashboard. Wait few seconds",
      data: result.shop,
    });
  } catch (error) {
    next(error);
  }
};

export default controllerForShopLogin;