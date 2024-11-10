import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
   try {
      const conncetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(` \n mongodb conecected !! DB Host:${conncetionInstance.connection.host}`)
      // console.log("connectionInstace is : " + conncetionInstance);

   } catch (error) {
      console.log("mongo db connection faild", error)
      process.exit(1)

   }
}
export default connectDB;