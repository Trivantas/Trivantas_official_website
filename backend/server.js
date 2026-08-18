const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const Admin = require('./models/Admin');

// Configure dotenv to point to the root .env file
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();

// Connect to Database
connectDB();

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or server-to-server)
    if (!origin) return callback(null, true);
    
    // Allow any localhost origin (e.g. localhost:5173, localhost:8080, localhost:8081)
    if (/^http:\/\/localhost(:\d+)?$/.test(origin) || origin === process.env.FRONTEND_URL) {
      return callback(null, true);
    }
    
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body Parser Middleware
app.use(express.json());

// Seed Admin User
const seedAdminUser = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@trivantas.com';
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.warn('WARNING: ADMIN_PASSWORD environment variable is not defined.');
      return;
    }

    const existingAdmin = await Admin.findOne({ email: adminEmail.toLowerCase().trim() });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await Admin.create({
        email: adminEmail.toLowerCase().trim(),
        password: hashedPassword,
      });
      console.log(`[SEED] Created default admin user: ${adminEmail}`);
    } else {
      console.log(`[SEED] Admin user already exists: ${adminEmail}`);
    }
  } catch (error) {
    console.error('[SEED] Error seeding admin user:', error);
  }
};

seedAdminUser();

// Mount Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/queries', require('./routes/queryRoutes'));

// Root path fallback
app.get('/', (req, res) => {
  res.json({ message: 'Trivantas Chatbot API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
