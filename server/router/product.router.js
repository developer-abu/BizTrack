import express from 'express';
import verifyJWT from '../middleware/verifyJWT.js';
import validateProduct from '../middleware/product.validate.js';
import controllerForProductCreation from '../controller/product.controller.js';
const router = express.Router()

router.post("/products/create",verifyJWT,validateProduct,controllerForProductCreation)

export default router