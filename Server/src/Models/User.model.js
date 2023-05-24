
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String,required: true},
  password: { type: String,required: true},
});


const UserModel = mongoose.model("userdata", UserSchema);

module.exports = {UserModel};
