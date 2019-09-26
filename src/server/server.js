const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userModel = require("./model/user");
const DB_URL = "mongodb://127.0.0.1:27017/tradeAny";
// mongoose.connect(DB_URL).then(res => {
//   if (res) {
//     console.log("connect success");
//   } else {
//     console.log("connect fail");
//   }
// })
mongoose.connect(DB_URL);
mongoose.connection.on("connected", function() {
  console.log("mongo connect success ");
});
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use("/user", userModel);

app.listen(9093, function(req, res) {
  console.log("node.js start port 9093");
});
