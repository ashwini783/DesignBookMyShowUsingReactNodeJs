const cors = require("cors");
const express=require('express');
require("dotenv").config(); // load the config data(enviroment variable) into process.env variable
const connectDB=require('./config/db');
const userRouter  = require('./routes/userRoutes');
connectDB();
const PORT=5000;
const app=express();
 app.use(express.json());
 app.use(cors());
  app.use('/api/users',userRouter)
  app.use(cors());
 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
 })
