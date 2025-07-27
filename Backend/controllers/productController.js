const Product = require("../models/Product");
const path = require("path");
const fs = require("fs");

exports.addProduct = async (req, res) => {
  try {
    const { name, price, stock, orders, category, description } = req.body;

    const product = new Product({
      name,
      price,
      stock,
      orders,
      category,
      description,
    });

    const savedProduct = await product.save();
    res.status(201).json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({ message: "Failed to add product" });
  }
};
