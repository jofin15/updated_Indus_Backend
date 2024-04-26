import { Categories } from "../model/categoryModel.js";


const fetchAllCategory = async (req, res) => {
    try {
        const category=await Categories.find()
        res.status(200).json(category)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Failed to fetch Brand" });
    }
  };
  

export default { fetchAllCategory };

