import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () =>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`)

  }catch(error) {

    console.log(`error connecting to db: ${error}`)
    process.exit(1) //1 = failure, 0 = success
  }
}