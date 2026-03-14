import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"; 

const connectDB = async () => {
  try{
    const uri =  process.env.MONGO_URI;
    if (!uri) {
      throw new Error('Missing MongoDB URI. Set MONGO_URI or MONGODB_URI in your environment.');
    }

    const connectionInstance = await mongoose.connect(`${uri}/${DB_NAME}`);
    console.log('\nConnected to MongoDB');
    console.log(connectionInstance.connection.host);
  }catch(error){
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export default connectDB;