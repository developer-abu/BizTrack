import express from 'express';
import verifyJWT from '../middleware/verifyJWT.js';
import validateProduct from '../middleware/product.validate.js';
import controllerForProductCreation from '../controller/product.controller.js';
import controllerForTheShowingAllProductToTheShopAccount from '../controller/see.allProducts.controller.js';
import controllerForLessStockProducts from '../controller/see.lessStockProducts.controller.js';
import controllerForStockUpdate from '../controller/update.stock.controller.js';
const router = express.Router()

router.post("/products/create",verifyJWT,validateProduct,controllerForProductCreation)
router.get("/see-products",verifyJWT,controllerForTheShowingAllProductToTheShopAccount)
router.get("/less-stock",verifyJWT,controllerForLessStockProducts)
router.patch("/products/:productId/stock",verifyJWT,controllerForStockUpdate);

export default router