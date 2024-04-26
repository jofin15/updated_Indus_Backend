import { Users } from "../model/userModel.js";



const fetchUserById = async (req, res) => {
  const id = req.params.id;
  console.log("id that i have recieved backend",id);
  try {
    const user = await Users.findById(id,"name  email id company addresses role");
    if (user) {
      console.log("my user",user);
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch User" });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findByIdAndUpdate(id,req.body,{new:true});
    if (user) {
      res.status(200).json(user);

    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch User" });
  }
};

export default { fetchUserById, updateUser };
