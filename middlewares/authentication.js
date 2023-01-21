const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")

const auth=asyncHandler(async (req,res,next)=>{
    try{
        const token = req.headers?.auth?.split(" ")[1]
        if(!token){
            res.status(401)
            throw new Error("Not authorized, Please login")
        }
    
        const verified=jwt.verify(token,process.env.JWT_SECRET)
    
       
        const user= await User.findById(verified.id).select("-password")
    
        if(!user){
            res.status(401)
            throw new Error("user not found...")
        }
        req.user=user
        next()
    
    } catch (err){
        res.status(401)
        throw new Error("Not authorized, Please login")
    }
    })

module.exports = auth