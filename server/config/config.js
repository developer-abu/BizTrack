import dotenv from "dotenv";

dotenv.config();

const envData={
    port:process.env.PORT,
    db_url:process.env.DB_URL,
    fr_url:process.env.FRONTEND_URL,
    email_url:process.env.GOOGLE_SCRIPT_EMAIL_SEND,
    jwt_secret:process.env.JWT_SECRET_KEY,
    jwt_exp:process.env.JWT_EXPIRES_IN
}

export default envData