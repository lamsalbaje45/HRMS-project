// const express = require('express');



// const app = express();
// const port = 3000;

// app.get('/hello', (req, res) => {
//   res.send('Hello!');
// });
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

import express from 'express'; // Uncomment this line if using ES6 modules
import mongoose from 'mongoose';
import Employee from './Models/employee.js'; // Adjust the path as necessary

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
const MONGODB_URI = "mongodb+srv://SusantLamsal:Lamsalsusant%4055@cluster0.8cv0c76.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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