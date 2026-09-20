import express from 'express'
import cors from 'cors'
import router from './router/shop.router.js'
import envData from './config/config.js'
import cookieParser from "cookie-parser";


const app = express()
// Parse incoming JSON request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin:`${envData.fr_url}`,credentials: true,})
);
app.use(cookieParser());
app.use(router)

// Global error handler — সব route/middleware-এর পরে
const errorHandler = (error, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: error.message,
  });
};

app.use(errorHandler);
export default app