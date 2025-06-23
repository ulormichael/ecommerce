// File: controller/auth.controller.js
const User = require("../model/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token using JWT_SECRET 
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// This code defines the authentication controller for user registration and login in an Express application.





// const Auth = require("../model/auth.model");
// const bcrypt = require("bcryptjs");

// exports.register = async (req, res) = {
//     try {
//         const { username, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
        
//         const auth = newAuth({ username, email, password: hashedPassword });
//         await auth.save();

//         res.status(201).json({ message: "User registered successfully" });
//     }   catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const auth = await Auth.findOne({ email });
//         if (!auth) {
//             return res.status(404).json({ message: "User not found" });

//         const isMatch = await bcrypt.compare(password, auth.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials" });

//         res.status(200).json({ message: "Login successful" });
//     }   catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };