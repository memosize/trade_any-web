import express from "express";
// import utility from "utility";
import cookie from "cookie-parser";
import { userModel as User } from "../model/user";
import { Request, Response } from "express";
import { WriteError } from "mongodb";
export const Router = express.Router();

Router.get("/list", function(req, res) {
    res.send('<h1>hello world </h1>')
});
//
Router.get("/info", function(req, res) {
  return res.json({ code: 1 });
});

Router.post("/login", function(req, res) {
  const { user, pwd } = req.body;
  User.findOne({ user, pwd: md5Pwd(pwd) }, { pwd: 0 }, function(err, doc) {
    if (!doc) {
      return res.json({ msg: "username or password is error" });
    }
    res.cookie("userid", doc._id);
    return res.json({ code: 0, data: doc });
  });
});

Router.post("/register", function(req, res) {
  const { user, pwd, type } = req.body;
  User.findOne({ user }, function(err, doc) {
    if (doc) {
      return res.json({ msg: "" });
    }
    User.create({ user, type, pwd: md5Pwd(pwd) }, function(err: any, doc: any) {
      if (err) {
        res.json({ msg: "backend error" });
      }
      return res.json({ code: 0 });
    });
  });
});

function md5Pwd(pwd: string) {
  const salt = "mikis";
  return salt+'sd'
}

