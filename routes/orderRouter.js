import express from "express";
import orderController from "../controller/orderController.js";

const router = express.Router();

router
  .post("/",orderController.addToOrder)
  .get("/",orderController.fetchOrderById)

export default router;
