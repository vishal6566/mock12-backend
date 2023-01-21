const express=require("express")
const { registerUser, loginUser, getUser} = require("../controller/userController")
const auth = require("../middlewares/authentication")


const router=express.Router()

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/getuser",auth,getUser)
module.exports=router