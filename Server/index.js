const express = require("express");
const {AuthRouter} = require("./src/Routes/Auth.Routes");
const {Connection} = require("./src/Config/db");
const cors=require("cors");
const { BlogRouter } = require("./src/Routes/Blogs.Routes");
const app = express();
app.use(cors())
app.use(express.json());
app.use("/auth", AuthRouter);
app.use("/blog", BlogRouter);

app.listen(8100, async () => {
  try {
    console.log("server Started On htto://localhost:8100");
    await Connection;
    console.log("Connected To DB");
  } catch (err) {
    console.log(err);
  }
});
