import express from "express";
import authContoller from "../controller/authController.js";

const router = express.Router();

router
  .post("/signup",authContoller.createUser)
  .post("/login",authContoller.loginUser)

export default router;
