const mongoose=require("mongoose")
require("dotenv").config
let Connection =mongoose.connect(process.env.MONGO_URL)


module.exports={Connection}