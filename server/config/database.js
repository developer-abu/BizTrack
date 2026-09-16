import mongoose from 'mongoose';
import envData from './config.js';

const dbConnection = async ()=>{
   await mongoose.connect(envData.db_url);
    console.log("Database connection successful")
}
export default dbConnection