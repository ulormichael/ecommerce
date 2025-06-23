const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [
        {
            productId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                default: 10,
            },
        },
    ],
}, { timestamps: true });

// Create a Mongoose model based on the schema
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;