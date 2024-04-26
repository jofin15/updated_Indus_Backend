import express from "express";
import brandController from "../controller/brandController.js";

const router = express.Router();

router
  .get("/",brandController.fetchAllBrands)

export default router;
