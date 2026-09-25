import express from 'express';
import verifyJWT from '../middleware/verifyJWT.js';
import controllerForSalesHistory from '../controller/sales-history.controller.js';
import validateSalesPayment from '../middleware/due.payment.js';
import controllerForSalePayment from '../controller/update-sale-payment.controller.js';
const router = express.Router()

router.get('/sales', verifyJWT,controllerForSalesHistory)
router.patch('/sales/:saleId/payment',verifyJWT,validateSalesPayment,controllerForSalePayment);

export default router