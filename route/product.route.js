const router = require('express').Router();
const { 
    createProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct 
} = require('../controller/product.controller');
const verifyToken = require("../middleware/verify_token");

// Create a new product
router.post('/create', verifyToken, createProduct);
// Get all products
router.get('/', getAllProducts);
// Get a product by ID
router.get('/:id', getProductById);
// Update a product by ID
router.put('/update/:id', verifyToken, updateProduct);
// Delete a product by ID
router.delete('/delete/:id', verifyToken, deleteProduct);
// Export the router
module.exports = router;
// This code defines the routes for product-related operations in an Express application.