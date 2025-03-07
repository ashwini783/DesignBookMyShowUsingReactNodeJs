const express=require('express')
const mongoose=require('mongoose')
//  const dbUrl='mongodb+srv://ashwiniavhad8:Ca6mFxOS99N0VPuv@cluster0.khztu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const dbUrl=process.env.DB_URL
 const connectDB=async()=>{
    try{
       await mongoose.connect(dbUrl)
            console.log("connected to Db")
        
    }
    catch(err){
         console.log(err)
    }
    
 }
 module.exports=connectDB;