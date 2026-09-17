import express from 'express';
import controllerForShopRegistration from '../controller/shop.controller.js';
import validateRegister from '../middleware/shop.validate.js';
const router = express.Router()

router.post('/register', validateRegister , controllerForShopRegistration)

export default router