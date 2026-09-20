import dotenv from "dotenv";

dotenv.config();

const envData={
    port:process.env.PORT,
    db_url:process.env.DB_URL,
    fr_url:process.env.FRONTEND_URL,
    email_url:process.env.GOOGLE_SCRIPT_EMAIL_SEND
}

export default envData