// File: controller/cart.controller.js
const Cart = require("../model/cart.model");

exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      const itemIndex = cart.products.findIndex(p => p.productId == productId);
      if (itemIndex > -1) {
        cart.products[itemIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
      await cart.save();
      res.status(200).json(cart);
    } else {
      const newCart = new Cart({ userId, products: [{ productId, quantity }] });
      await newCart.save();
      res.status(201).json(newCart);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};