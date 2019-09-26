const express = require("express");
const utils = require("utility");

const cookie = require("cookie-parser");
import { userModel as User } from "../model/user";
const Router = express.Router();
Router.get("/list", function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc);
  });
});

Router.get("/info", function(req, res) {
  return res.json({ code: 1 });
});

Router.post("/login", function(req, res) {
  const { user, pwd } = req.body;
  User.findOne({ user, pwd: md5Pwd(pwd) }, { pwd: 0 }, function(err, doc) {
    if (!doc) {
      return res.json({ msg: "username or password is error" });
    }
    res.cookie({ userid: res._id });
    return res.json({ code: 0, data: doc });
  });
});
Router.post("/register", function(req, res) {
  console.log("ssss");
  const { user, pwd, type } = req.body;
  User.findOne({ user }, function(err, doc) {
    if (doc) {
      return res.json({ msg: "" });
    }
    User.create({ user, type, pwd: md5Pwd(pwd) }, function(err, doc) {
      if (err) {
        res.json({ msg: "backend error" });
      }
      return res.json({ code: 0 });
    });
  });
});

function md5Pwd(pwd) {
  const salt = "mikis";
  return utility.md5(utils.md5(pwd + salt));
}
module.exports = { Router };
