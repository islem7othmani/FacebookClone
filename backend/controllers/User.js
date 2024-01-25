const userModel = require("../models/user.model");


const getUser = async (req, res) => {
    const email = req.params.email; 
    try {
      const user = await userModel.findOne({ email }); 

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
 
      return res.status(200).json(user);
    } catch (err) {
   
      console.error('MongoDB Query Error:', err);
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }
  };
  

module.exports.getUser=getUser;
