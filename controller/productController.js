import { Products } from "../model/productModel.js";

const createProduct = async (req, res) => {
  try {
    const product = new Products(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create Product" });
  }
};

const fetchAllProducts = async (req, res) => {
  let query = {};

  if (req.query.category) {
    query.category = req.query.category;
  }

  if (req.query.brand) {
    query.brand = req.query.brand;
  }

  let sortQuery = {};
  if (req.query._sort && req.query._order) {
    sortQuery[req.query._sort] = req.query._order;
  }

  const totalDocs = await Products.countDocuments(query);
  console.log({ totalDocs });

  let pageQuery = {};
  if (req.query._start && req.query._limit) {
    const page = parseInt(req.query._start);
    const pageSize = parseInt(req.query._limit);
    pageQuery = { skip: pageSize * (page - 1), limit: pageSize };
  }

  try {
    let products = await Products.find(query)
      .sort(sortQuery)
      .skip(pageQuery.skip)
      .limit(pageQuery.limit);
    res.set("X-TOTAL-COUNT", totalDocs);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to fetch Product" });
  }
};

const fetchProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Products.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Products.findByIdAndUpdate(id,req.body,{new:true});
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export default { createProduct, fetchAllProducts,fetchProductById,updateProduct };
