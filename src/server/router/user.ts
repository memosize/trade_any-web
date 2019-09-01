import express from "express";
import utility from "utility";
import * as User from "../model/model";
import cookie from "cookie-parser";
const Router = express.Router();
const user = User.getModel("user");
