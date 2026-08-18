const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGO_URI || !process.env.MONGO_URI.trim()) {
    console.error('==================================================');
    console.error('WARNING: MONGO_URI is empty or missing in your .env file.');
    console.error('Please add your MongoDB connection string to the .env file.');
    console.error('==================================================');
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
  }
};

module.exports = connectDB;
