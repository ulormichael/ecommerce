
const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
  name: String, // Name field of type String
  id: {
    type: String,
    required: true,
    unique: true
  }, // Unique identifier for the user
  username: {
    type: String,
    required: true,
    unique: true
  }, // Required and unique username
  email: { 
    type: String, 
    required: true, 
    unique: true 
}, // Required and unique email
  password: {
    type: String,
    required: true,
    minlength: 2 // Password must be six characters
  }
}, { timestamps: true });

// Create a Mongoose model based on the schema
const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;
