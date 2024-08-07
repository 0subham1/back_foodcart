const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const blogList = require("./blog");
console.log(blogList, "blogList");
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/newsapi/bloglist", (req, res) => {
  res.send(blogList);
  // res.send("hello");
});

app.use("/user", require("./src/route/user"));
app.use("/item", require("./src/route/item"));
app.use("/order", require("./src/route/order"));

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("db connected");
});

app.listen(8000, (err) => {
  console.log("server running at 8000");
  if (err) console.log("err", err);
});
