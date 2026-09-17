import registerShop from "../service/register.service.js";

const controllerForShopRegistration = async (req,res,next)=>{
 try {
    // Get validated data from the request body
    const registeredShop = await registerShop(req.body);

    // Send successful response
    return res.status(201).json({
      success: true,
      message: "Shop registered successfully",
      data: registeredShop,
    });
  } catch (error) {
    // Pass error to the error-handling middleware
    next(error);
  }
}

export default controllerForShopRegistration
