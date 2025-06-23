const router = require("express").Router();
const { addToCart } = require("../controller/cart.controller");
const verifyToken = require("../middleware/verify_token");

router.post("/add", verifyToken, addToCart);

module.exports = router;



// const router = require('express').Router();
// const { addToCart, getCart, updateCart, deleteCart } = require('../controller/cart.controller');
// const verifyToken = require("../middleware/verify_token");

// router.post('/add', addToCart); // Add product to cart
// router.get('/:userId', getCart); // Get cart by user ID
// router.put('/update/:userId', updateCart); // Update cart by user ID
// router.delete('/delete/:userId', deleteCart); // Delete cart by user ID

// module.exports = router;
// // This code defines the routes for cart-related operations in an Express application.
