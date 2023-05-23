const express=require("express")

const app=express()

app.use(express.json())

app.listen(8100,async()=>{
    try{
console.log("server Started On htto://localhost:8100")

    }catch(err){
console.log(err)
    }
})