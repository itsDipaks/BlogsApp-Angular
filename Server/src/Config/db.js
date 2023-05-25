const mongoose=require("mongoose")

let Connection =mongoose.connect("mongodb://itsdipakpawar4206:blogapp@ac-dfwgwzd-shard-00-00.3wpfew1.mongodb.net:27017,ac-dfwgwzd-shard-00-01.3wpfew1.mongodb.net:27017,ac-dfwgwzd-shard-00-02.3wpfew1.mongodb.net:27017/?ssl=true&replicaSet=atlas-bmdl7s-shard-0&authSource=admin&retryWrites=true&w=majority")


module.exports={Connection}