const Supplier = require('../models/Supplier');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  const {
    fullName, phoneNumber, email, password,
    businessName, location, productType, deliveryAvailable
  } = req.body;

  try {
    const existingSupplier = await Supplier.findOne({ email });
    if (existingSupplier) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSupplier = new Supplier({
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      businessName,
      location,
      productType,
      deliveryAvailable
    });

    await newSupplier.save();

    res.status(201).json({ message: 'Supplier registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering supplier', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const supplier = await Supplier.findOne({ email });

    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    const isMatch = await bcrypt.compare(password, supplier.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Login successful', supplier });
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err.message });
  }
};
