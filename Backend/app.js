const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const supplierRoutes = require('./routes/supplierRoutes');
const vendorRoutes = require('./routes/vendorRoutes.js');
const productRoutes = require("./routes/productRoutes");


dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('https://bazaar-buddies-hub.onrender.com/api/suppliers', supplierRoutes);
app.use('https://bazaar-buddies-hub.onrender.com/api/vendors', vendorRoutes);
app.use("https://bazaar-buddies-hub.onrender.com/api/products", productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
