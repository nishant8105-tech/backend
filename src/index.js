import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env'
});


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000 , ()=>{
    console.log(`server is running at port : ${process.env.PORT}`);
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