const Product = require("../model/product.model");

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Product By ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};






// const createProduct = async (req, res) => {
//   try {
//     const { id, title, price, description, category, image } = req.body;

//     // Validate input
//     if (!title || !price || !description || !category) {
//       return res.status(400).json({ error: "All fields are required" });
//     }
   
//     // Create a new post
//     const newProduct = new Product({
//       id,
//       title,
//       price,
//       description,
//       category,
//       image: req.file ? req.file.path: 'uploads/avatar.png',
//     });

//     // Save the post to the database
//     await newProduct.save();
//     res.status(200).json({ message: "Product created successfully" });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };