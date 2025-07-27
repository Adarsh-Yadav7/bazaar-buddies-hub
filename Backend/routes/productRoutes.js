// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // ✅ THIS WAS MISSING
const { getAllProducts, addProduct } = require("../controllers/productController");

// Add product
router.post("/add", addProduct);

// Get all products
router.get("/", getAllProducts);

// ✅ Update product by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updated);
  } catch (err) {
    console.error("Error in update:", err);
    res.status(500).json({ message: "Update failed" });
  }
});

module.exports = router;
