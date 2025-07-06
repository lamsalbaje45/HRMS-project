

import express from 'express'; // Uncomment this line if using ES6 modules
import mongoose from 'mongoose';
import Employee from './Models/employee.js'; // Adjust the path as necessary
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file


const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
const MONGODB_URI = process.env.MONGO_URI
const connectDB = mongoose.connect(MONGODB_URI);
connectDB
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if connection fails
  }); 
 app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
  import emp from './Routes/employeeRoutes.js'; // Import the employee routes
  app.use('/api/employees', emp); // Use the employee routes