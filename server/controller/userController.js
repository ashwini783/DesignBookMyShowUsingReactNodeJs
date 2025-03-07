const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  try {
    const userExist = await userModel.findOne({ email: req.body.email });
    console.log("user saved");
    if (userExist) {
      // res.status(400).json({success:false,message:"User Already Exist"})
      return res.send({ success: false, message: "User Already Exist" });
    }
    const newUser = new userModel(req.body);

    await newUser.save();

    return res.send({
      success: true,
      message: "User registered successfully, please login",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const createLogin = async (req, res) => {
  try {
    console.log("Login function called");

    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      console.log("User not found");
     return res.status(400).json({ success: false, message: "User not found" });
    }
    if (req.body.password !== user.password) {
      onsole.log("Invalid password")
       return res.send({ success: false, message: "Invalid password" });
    }

    //token will be generated when user logs in
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    }); // _id is id from mongoDB id
    console.log("token..", token);
   return res.send({
      success: true,
      message: "User logged in successfully",
      data: token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCurrentUser=async(req,res)=>{
   console.log("headers", req.headers.Authorization);
   const user=await userModel.findById(req.body.userId).select("-password")  //if we dont want to send password
   res.send({
    "success":true,
    message:"you are authorised",
    data:user
   })
}

module.exports = { createUser, createLogin ,getCurrentUser};
