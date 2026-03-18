import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User, user} from "../models/user.model.js";
import { uplouploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async (req, res) => {
  //
  const {fullname , email, username, password} = req.body 
  console.log('email', email);
  })

  if(
    [fullname , email, username, password].some((field)=>field?.trim()==="")
  ){
    throw new ApiError(400,  "all fields are compulsory")
  }

  const existedUser = user.findOne({
    $or: [{username} , {email}]
  })

  if(existedUser){
    throw new ApiError(409, "user with this email/username already exists.")
  }

  const avatarlocalpath = req.files?.avatar[0]?.path;
  const coverImagelocalpath = req.files?.coverImage[0]?.path;

  if(!avatarlocalpath){
    throw new ApiError(400, 'avatar file is required')
  }

  const avatar = await uplouploadOnCloudinary(avatarlocalpath) 
  const coverImage = await uplouploadOnCloudinary(coverImagelocalpath) 

  if(!avatar){
    throw new ApiError(400, 'avatar file is required')
  }

  const user= await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.tolowercase()
  })

  const createUser= await User.findById(user._id).select(
    "-password -refreshToken "
  )

  if (!createUser){
     throw new ApiError(400, "Something went wrong while registering the user.") 
  }

  return res.status(201).json(
    new ApiResponse(200, createdUser , "User registered successfully")
  )

export {registerUser}