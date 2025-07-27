const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  orders: { type: Number, default: 0 },
  category: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
