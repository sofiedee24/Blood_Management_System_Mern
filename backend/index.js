/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
//app.use(cors());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // React frontend
    credentials: true,
  }));

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/BMS';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Test Route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from MERN backend!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
*/


/* wag mp muna tanggalin to pag aaralan natin 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ✅ uncomment this
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
/*app.use(cors({
    origin: 'http://localhost:3003', // React frontend
    credentials: true,
})); 

app.use(cors({ origin: '*' }));

app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/BMS';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Test Route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from MERN backend!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // removes origin restriction temporarily

app.use(express.json());           // parse JSON bodies

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/BMS';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// --- Routes ---
// GET test route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from MERN backend!' });
});

// POST route for donations
app.post('/api', (req, res) => {
  const donationData = req.body;
  console.log('Received donation:', donationData);

  // Here you can save to MongoDB if needed
  // Example: DonationModel.create(donationData)

  res.status(201).json({ message: 'Donation received!', data: donationData });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

