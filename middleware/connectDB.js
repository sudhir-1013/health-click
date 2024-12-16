// connectDB.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://vanshaj:vanshaj@healthclickcluster.tdybg.mongodb.net/'; // Replace with your actual MongoDB URI

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Error connecting to the database:', error.message);
      throw error; // Rethrow to handle in calling code
    }
  }
}

export default connectDB;
