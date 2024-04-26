import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/productRouter.js";
import brandRouter from "./routes/brandRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js"

import cors from "cors";

const server = express();
const PORT = 8081;

// Middlewares
server.use(express.json()); // To parse req.body
server.use(cors({
    exposedHeaders: ["X-TOTAL-COUNT"]
}));

// DB connection
main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("Database connected");
}

// Routes
server.use("/products", productRouter);
server.use("/categories", categoryRouter);
server.use("/brands", brandRouter);
server.use("/users", userRouter);
server.use("/auth", authRouter);
server.use("/cart", cartRouter);
server.use("/orders",orderRouter)

// Error handling middleware
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
