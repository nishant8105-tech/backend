import connectDB from './db/index.js';
import dotenv from 'dotenv';

// Load environment variables from the project root .env file.
// When running the app from within the Project folder, dotenv will automatically
// load `Project/.env` when called without a `path` option.
const dotenvResult = dotenv.config();


connectDB();






















/*
import express from 'express';
const app = express();

(async()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", ()=>{
      console.log("Error connecting to MongoDB")
    })

    app.listen(process.env.PORT , ()=>{
      console.log(`Server is running on port ${process.env.PORT}`)
    })

  }catch(error){
    console.error('Error connecting to MongoDB:', error);
  }
})()
*/