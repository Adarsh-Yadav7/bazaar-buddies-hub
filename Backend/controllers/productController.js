const Product = require("../models/Product");

// ✅ Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, stock, category, description } = req.body;
    const product = new Product({ name, price, stock, category, description });
    await product.save();
    res.status(201).json({ success: true, message: "Product added successfully", product });
  } catch (error) {
    console.error("Add product error:", error);
    res.status(500).json({ success: false, message: "Server error while adding product" });
  }
};

// ✅ Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json(products);
  } catch (error) {
    console.error("Fetch products error:", error);
    res.status(500).json({ success: false, message: "Server error while fetching products" });
  }
};
