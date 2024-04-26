import {Brands} from "../model/brandModel.js"


const fetchAllBrands = async (req, res) => {
    try {
        const brands=await Brands.find()
        res.status(200).json(brands)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Failed to fetch Brand" });
    }
  };
  

export default { fetchAllBrands };

