const Vendor = require('../models/Vendor');
const bcrypt = require('bcrypt');

// SIGNUP
exports.signup = async (req, res) => {
  const {
    vendorName, shopName, email, password,
    phoneNumber, location, productCategory
  } = req.body;

  try {
    const existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newVendor = new Vendor({
      vendorName,
      shopName,
      email,
      password: hashedPassword,
      phoneNumber,
      location,
      productCategory
    });

    await newVendor.save();

    res.status(201).json({ message: 'Vendor registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering vendor', error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const vendor = await Vendor.findOne({ email });

    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Login successful', vendor });
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err.message });
  }
};
