const express=require('express');
const authMiddleWare=require("../middlewares/authMiddleware") 
const userRouter=express.Router();

const {createUser,createLogin,getCurrentUser} =require('../controller/userController');

userRouter.post('/register',createUser)
userRouter.post('/login',createLogin)
userRouter.get("/get-current-user",authMiddleWare ,getCurrentUser)  // we can have multiple middlewares


module.exports = userRouter;