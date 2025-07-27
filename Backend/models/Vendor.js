const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  shopName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  location: { type: String, required: true },
  productCategory: { type: String, required: true }
}, { timestamps: true });

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;
