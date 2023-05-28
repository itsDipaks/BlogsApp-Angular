let {Router} = require("express");

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { UserModel } = require("../Schema/User.Schema");
const { Authenticate } = require("../Middleware/Auth.middleware");
require("dotenv").config;

let AuthRouter = Router();

// ----------------------Add Employee ----------------------------

AuthRouter.post("/signup", async (req, res) => {
  let {email} = req.body;
  let isexist = await UserModel.findOne({email});
  if (isexist) {
    res
      .status(201)
      .send({msg: "User Already Exist With this Email Plase Login !!"});
  } else {
    const {name, email, password} = req.body;

    bcrypt.hash(password, 4, async function (err, hashedpassword) {
      if (err) {
        res.status(201).send({msg: "Something wents wrong ", err: err});
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
            .status(201)
            .send({msg: "something wents wrong to uploading the data", err});
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
        res.status(201).send({msg: "User Not Found Please Signup!!"});
      } else {
        const hashedpassword = Checkuser.password;
        const user_id = Checkuser._id;
        bcrypt.compare(password, hashedpassword, function (err, result) {
          if (result) {
            var token = jwt.sign({user_id: user_id}, process.env.PRIVATEKEY);
            res.status(200).send({token: token, user_id: user_id});
          } else {
            res.status(201).send({
              msg: "Authentication Faild please Check your Password",
              err: err,
            });
          }
        });
      }
    } else {
      res.send({msg: "Input Field Is Missing"});
    }
  } catch (err) {
    res.send({msg: "SomeThing Wents Wrong please Try Again", err});
  }
});



AuthRouter.get('/profile', Authenticate,async (req, res) => {
  console.log(req.body)
  try {
    const user = await UserModel.findById( req.body.user_id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});




module.exports = {AuthRouter};
