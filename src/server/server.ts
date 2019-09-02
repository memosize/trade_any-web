import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const DB_URL = "mongodb://1270.0.0.1:27017/tradeAny";
mongoose.connect(DB_URL).then(res => {
  if (res) {
    console.log("connect success");
  } else {
    console.log("connect fail");
  }
});
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use;
