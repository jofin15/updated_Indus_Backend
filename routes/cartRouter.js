import express from "express";
import cartController from "../controller/cartController.js";


const router = express.Router();

router
  .post("/",cartController.addToCart)
  .get("/",cartController.fetchCartByUser)
  .delete("/",cartController.deleteCart)
  .patch("/",cartController.updateCart)

export default router;
