import express from "express";

const router = express.Router();
import productController from "../controller/productController.js";

router
  .get("/",productController.fetchAllProducts)
  .get("/:id",productController.fetchProductById)
  .post("/", productController.createProduct)
  .patch("/:id",productController.updateProduct)

export default router;
