import registerShop from "../service/register.service.js";
import verifyEmail from "../service/verify-email.service.js";

const controllerForShopRegistration = async (req,res,next)=>{
 try {
    // Get validated data from the request body
    const registeredShop = await registerShop(req.body);

    // Send successful response
    return res.status(201).json({
      success: true,
      message: "Shop Registered Successfully. A Verification Email Has Been Sent. Please Verify Your Account",
      data: registeredShop,
    });
  } catch (error) {
    // Pass error to the error-handling middleware
    next(error);
  }
}


export const controllerForEmailVerification = async (req, res, next) => {
  try {
    const { token } = req.body;

    const result = await verifyEmail(token);

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {

    next(error);
  }
};


export default controllerForShopRegistration
