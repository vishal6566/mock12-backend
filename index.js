const express=require("express")
const dotenv=require("dotenv").config()
const cors=require("cors")
const connect=require("./config/db")
const user=require("./routes/userRouter")
const app=express()

app.use(express.json())
app.use(cors())
const PORT=process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/",user)

app.listen(PORT,async()=>{
await connect()
console.log(`http://localhost:${PORT}`)
})