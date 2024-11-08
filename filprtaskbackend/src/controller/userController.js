const User = require('../model/userModel');

exports.addUser = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, city } = req.body;

    if (!fullName || !email || !mobileNumber || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { mobileNumber }] });
    if (existingUser) {
      return res.status(400).json({ message: "Email or mobile number already exists" });
    }

    const newUser = new User({
      fullName,
      email,
      mobileNumber,
      city,
    });

    // Save the user in the database
    await newUser.save();

    // Return success response
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

// Controller to get all users
exports.getUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    // Return the list of users in the response
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};



exports.updateByUserId = async (req, res) => {
  try {
    const { userId } = req.params;  // Get userId from the URL parameter
    const { fullName, email, mobileNumber, city, isApprove } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        fullName,
        email,
        mobileNumber,
        city,
        isApprove
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
};