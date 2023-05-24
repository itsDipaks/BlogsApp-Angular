let {Router} = require("express");
 
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/User.model");
require("dotenv").config;

let AuthRouter = Router();
const privateKey = process.env.PRIVATEKEY;

// ----------------------Add Employee ----------------------------

AuthRouter.post("/singup", async (req, res) => {
  let {email} = req.body;
  let isexist = await UserModel.findOne({email});
  if (isexist) {
    res
      .status(400)
      .send({msg: "User Already Exist With this Email Plase Login !!"});
  } else {
    const {
      name,
      email,
      password,
    } = req.body;

    bcrypt.hash(password, 4, async function (err, hashedpassword) {
      if (err) {
        res.status(404).send({msg: "Something wents wrong ", err: err});
      } else {
        try {
          let newEmployee = new UserModel({
         name,
            email,
            password: hashedpassword,
          });
          await newEmployee.save();
          res.status(200).send({msg: "Signup Sucessfully", data: newEmployee});
        } catch (err) {
          res
            .status(404)
            .send({msg: "something wents wrong to uploading the data",err});
        }
      }
    });
  }
});

// ----------------------Login Employee ----------------------------

AuthRouter.post("/login", async (req, res) => {
  const {email, password} = req.body;

  try {
    if (email && password) {
      const Checkuser = await UserModel.findOne({email});
      if (!Checkuser) {
        res.status(404).json({msg: "Unauthorized", isuser: false});
      } else {
        let isadmincheck = Checkuser.isAdmin;

        const hashedpassword = Checkuser.password;
        const user_id = Checkuser._id;
        bcrypt.compare(password, hashedpassword, function (err, result) {
          if (result) {
           UserModel.findOneAndUpdate({_id:Checkuser._id},{ $set:{Status:"Active"} })
            var token = jwt.sign({user_id: user_id}, privateKey);
            res.status(200).json({
              token: token,
              isAdmin: isadmincheck,
              userinfo: {
                name: Checkuser.firstname + " " + Checkuser.lastname,
                email: Checkuser.email,
                _id:Checkuser._id
              },
              msg: "Login sucsess",
            });
          } else {
            res.status(401).json({
              msg: "WrongCredential",
              isuser: false,
            });
          }
        });
      }
    } else {
      res.json({msg: "FieldMissing", isuser: false});
    }
  } catch (err) {
    res.json({msg: "SomeThing Wents Wrong please Try Again"});
  }
});

module.exports = {AuthRouter};
