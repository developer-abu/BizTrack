import getProducts from "../service/see.all.products.service.js"

const controllerForTheShowingAllProductToTheShopAccount = async (req,res)=>{
 try {
    const products = await getProducts(req.shopId);

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
}

export default controllerForTheShowingAllProductToTheShopAccount