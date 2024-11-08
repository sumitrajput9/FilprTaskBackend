const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    city: {
      type: String,
    },
    isApprove: {
      type: Boolean,
      default: false, // Initially set to false
    },
  },
  {
    timestamps: true,
  }
);

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
