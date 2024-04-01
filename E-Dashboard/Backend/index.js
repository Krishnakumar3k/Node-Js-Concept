const express = require("express");
// const mongoose  = require("mongoose");
const cors = require("cors");
require("./DB/config"); //DB connection code
const users = require("./DB/user");
const app = express();
app.use(express.json()); // middleware
app.use(cors());
// DB Connection below code
// const connectDb = async()=>{
//     mongoose.connect('mongodb://localhost:27017/e-comm');
//   const  productSchema = new mongoose.Schema({});
//   const product= mongoose.model('product', productSchema);
//   const data = await product.find();
//   console.log(data);
// }
// connectDb();

/* SignUp API */
app.post("/signup", async (req, res) => {
  let user = new users(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  res.send(result);
});

//Login API ----------------------------------------------
app.post("/login", async (req, res) => {
  //res.send(req.body)
  console.log(req.body);
  //Start fc-2
  if (req.body.email && req.body.password) {
     // Start fc-1
  let user = await users.findOne(req.body).select("-password"); //.select("-password") it is used to remove password
  if (user) {
    res.send(user);
  } else {
    res.send({ result: "No User Found" });
  }
  // End fc-1
  }else {
    res.send({ result: "No User Found" });
  }
 
});



app.listen(5000, () => {
  console.log("Server is Running on Port 5000");
});
