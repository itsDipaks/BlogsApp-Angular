const express = require("express");
const cors=require("cors");
const { AuthRouter } = require("./Routes/Auth.Routes");
const { BlogRouter } = require("./Routes/Blogs.Routes");
const { Connection } = require("./Config/db");
const app = express();
app.use(cors())
app.get("/",(req,res)=>{
  res.send("This Is Blogifiy App Server")
})
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
