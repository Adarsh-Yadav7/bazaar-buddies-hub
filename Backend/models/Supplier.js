const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  businessName: { type: String, required: true },
  location: { type: String, required: true },
  productType: { type: String, required: true },
  deliveryAvailable: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);
