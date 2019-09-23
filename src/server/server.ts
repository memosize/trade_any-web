
import express from 'express'
import mongoose from 'mongoose'
// const express = require('express')
// const mongoose = require('mongoose')
import bodyParser from 'body-parser'
import  cookieParser from 'cookie-parser'
// const bodyParser = require('body-parser')
// const cookieParser =  require('cookie-parser')
 import  Router from "./router/user";
// const Router = require('./router/user')

const DB_URL = "mongodb://127.0.0.1:27017/tradeAny";
mongoose.connect(DB_URL).then((res) => {
  if (res) {
    console.log("connect success");
  } else {
    console.log("connect fail");
  }
});
const app = express();
app.get('/', function (req, res) {
  res.send('hello, express')
})
app.use(cookieParser());
app.use(bodyParser());
app.use('/user',Router.Router);

app.listen(9093, function(req, res) {
  console.log("node.js start port 9093");
});
