import express from 'express';
import controllerForShopRegistration, { controllerForEmailVerification } from '../controller/shop.controller.js';
import validateRegister from '../middleware/shop.validate.js';
controllerForEmailVerification
const router = express.Router()

router.post('/register', validateRegister , controllerForShopRegistration)
router.post("/verify-email", controllerForEmailVerification);

export default router