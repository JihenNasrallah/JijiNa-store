import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.mongodb;

const dbConnect = async () => {
    try {
         await mongoose.connect(MONGODB_URL)
        console.log(`connection to /-${mongoose.connection.name} Database-/ is successful!`)
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect