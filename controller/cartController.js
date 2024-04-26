
import { Carts } from "../model/cartModel.js";
import mongoose from "mongoose";
const fetchCartByUser = async (req, res) => {
  const { user } = req.query;
  try {
    const cartItems = await Carts.find({ user });
    // .populate("user")
    // .populate("product");
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};

const addToCart = async (req, res) => {
  try {
    // Validate req.body against your schema before creating a new cart item
    const cart = new Carts(req.body);

    const doc = await cart.save();
    res.status(201).json(doc); // Use 201 for successful resource creation
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(400).json({ error: "Failed to add to cart" });
  }
};


const deleteCart = async (req, res) => {
  const { id } = req.query;
  console.log("id that I have received in backend:", id);


  try {

    const deletedItem = await Carts.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(deletedItem);
  } catch (error) {
    console.error("Error deleting item from cart:", error);
    res.status(500).json({ error: "Failed to delete item from the cart" });
  }
};

const updateCart = async (req, res) => {
  const { id } = req.query;
  console.log("id that I have received in backend for update:", id);


  try {
    const updateItem = await Carts.findByIdAndUpdate(id,req.body,{new:true});
    if (!updateItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(updateItem);
  } catch (error) {
    console.error("Error updating item from cart:", error);
    res.status(500).json({ error: "Failed to update item from the cart" });
  }
};


export default { addToCart, fetchCartByUser,deleteCart,updateCart};
