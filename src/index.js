import connectDB from './db/index.js';
import {app} from './app.js';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env'
});


connectDB()
.then(()=>{
  const PORT = process.env.PORT || 8000;
  app.listen(PORT , ()=>{
    console.log(`server is running at port : ${PORT}`);
  })
})
.catch((err)=>{
  console.error('Error connecting to MongoDB:', err);
})






















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