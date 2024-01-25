const userModel = require("../models/user.model");


const getUser = async (req, res) => {
    const email = req.params.email; // Extract the user email from the request parameters
    try {
      const user = await userModel.findOne({ email }); // Find the user by email using Mongoose's findOne method
  
      // Check if the user is found
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Return the user data if found
      return res.status(200).json(user);
    } catch (err) {
      // Handle any errors that may occur during the database query
      console.error('MongoDB Query Error:', err);
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }
  };
  

module.exports.getUser=getUser;
