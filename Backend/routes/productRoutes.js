const express = require("express");
const router = express.Router();
const { addProduct } = require("../controllers/productController");

// Route without file upload
router.post("/add", addProduct);

module.exports = router;
