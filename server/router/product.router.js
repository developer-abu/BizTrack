import express from 'express';
import verifyJWT from '../middleware/verifyJWT.js';
import validateProduct from '../middleware/product.validate.js';
import controllerForProductCreation from '../controller/product.controller.js';
import controllerForTheShowingAllProductToTheShopAccount from '../controller/see.allProducts.controller.js';
const router = express.Router()

router.post("/products/create",verifyJWT,validateProduct,controllerForProductCreation)
router.get("/see-products",verifyJWT,controllerForTheShowingAllProductToTheShopAccount)

export default router