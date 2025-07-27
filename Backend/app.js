// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const supplierRoutes = require('./routes/supplierRoutes');
// const vendorRoutes = require('./routes/vendorRoutes.js');
// const productRoutes = require("./routes/productRoutes");


// dotenv.config();

// const app = express();
// connectDB();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/suppliers', supplierRoutes);
// app.use('/api/vendors', vendorRoutes);
// app.use("/api/products", productRoutes);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const supplierRoutes = require('./routes/supplierRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();
connectDB();

// ✅ Enable CORS for frontend domain (VERY IMPORTANT)
app.use(cors({
  origin: "https://bazaar-buddies.vercel.app", // <-- your frontend URL
  credentials: true
}));

app.use(express.json());

// ✅ API Routes with correct paths (no full URL)
app.use('/api/suppliers', supplierRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/products', productRoutes);

// ✅ Port Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
