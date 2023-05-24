const mongoose=require("mongoose")

let Connection =mongoose.connect("mongodb+srv://itsdipakpawar4206:blogapp@cluster0.3wpfew1.mongodb.net/?retryWrites=true&w=majority")

module.exports={Connection}