import { Users } from "../model/userModel.js";

const createUser = async (req, res) => {
  try {
    const user = new Users(req.body);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create Product" });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await Users.findOne(
      { email: req.body.email },
 
    );
    console.log({user})
    if(!user){
      res.status(401).json({message:"no such user email"})
    }
    else if (user.password === req.body.password) {
      res.status(200).json({id:user.id,email:user.email,name:user.name,addresses:user.addresses,role:user.role,company:user.company});
    }else{
      res.status(401).json({message:"Invalid password"})
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to authenticate" });
  }
};

export default { createUser, loginUser };
