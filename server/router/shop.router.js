import express from 'express';
import controllerForShopRegistration, { controllerForAuthenticateUser, controllerForEmailVerification } from '../controller/shop.controller.js';
import validateRegister from '../middleware/shop.validate.js';
import validateLogin from '../middleware/shop.login.js';
import controllerForShopLogin from '../controller/login.controller.js';
import verifyJWT from '../middleware/verifyJWT.js';
import controllerForLogout from '../controller/logout.controller.js';
import validateSale from '../middleware/validate-sale.js';
import controllerForSaleCreation from '../controller/sale.controller.js';
import controllerForAccountDeletion from '../controller/delete.account.controller.js';

const router = express.Router()

router.post('/register', validateRegister , controllerForShopRegistration)
router.post("/verify-email", controllerForEmailVerification);
router.post("/login", validateLogin, controllerForShopLogin);
router.get("/me", verifyJWT, controllerForAuthenticateUser);
router.post("/logout", controllerForLogout)
router.post("/sales/create",verifyJWT,validateSale,controllerForSaleCreation);
router.delete("/delete",verifyJWT,controllerForAccountDeletion);

export default router