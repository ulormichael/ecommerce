const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require('jsonwebtoken');
const authRouter = require("./route/auth.route");
const productRouter = require("./route/product.route");
const paymentRouter = require("./route/payment.route");
const cartRouter = require("./route/cart.route");
const cors = require("cors");
const paymentController = require("./controller/payment.controller");
const axios = require("axios");
dotenv.config();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";
mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB Successfully");
})
.catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

app.get("/", (req, res) => {
    res.send("Hello World! Welcome to my Ecommerce Store")
})

// Using the imported routes
app.use("/api/cart", cartRouter);
app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);
app.use(paymentRouter);
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
