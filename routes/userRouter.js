import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router
  .get("/:id",userController.fetchUserById)
  .patch("/:id",userController.updateUser)


export default router;
