const Client = require('../model/clientModel');
exports.addClient = async (req, res) => {
  try {
    
    const { name, description, designation, image } = req.body;

    if (!name || !description || !designation || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newClient = new Client({
      name,
      description,
      designation,
      image: image, 
    });

    await newClient.save();

    res.status(201).json({ message: "Client created successfully", client: newClient });
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({ message: "Error creating client", error: error.message });
  }
};
