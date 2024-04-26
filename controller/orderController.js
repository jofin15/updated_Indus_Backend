import { Orders } from "../model/orderModel.js";


const addToOrder = async (req, res) => {
    try {
      // Validate req.body against your schema before creating a new cart item
      const order = new Orders(req.body);
  
      const myOrder = await order.save();
      res.status(200).json(myOrder); // Use 201 for successful resource creation
    } catch (error) {
      console.error("Error adding orders:", error);
      res.status(400).json({ error: "Failed to add order in the database" });
    }
  };
  


  const fetchOrderById = async (req, res) => {
    const {userId}=req.query
    try {
      const order = await Orders.findOne({"user.id":userId})
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch products" });
    }

  };
  

  export default { addToOrder,fetchOrderById};
