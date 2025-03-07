// const jwt=require("jsonwebtoken")
import jwt from "jsonwebtoken";
export const auth=async(req,res,next)=>{
    try{
        console.log("headers", req.headers.authorization)
        const token=req.headers.authorization.split(" ")[1];  //split based on empty space we will get array,we want to get second elemnt of array
         console.log(token);
         const verifedToken=jwt.verify(token,process.env.JWT.SECRET);
         req.body.userId=verifedToken.userId;
         next();
    }
    catch(error){
         res.status(401).json({
            message:"Token Invalid"
         })
    }
}