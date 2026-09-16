import dotenv from "dotenv";

dotenv.config();

const envData={
    port:process.env.PORT,
    db_url:process.env.DB_URL
}

export default envData