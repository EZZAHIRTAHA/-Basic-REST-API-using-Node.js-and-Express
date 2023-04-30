const express = require('express');
const dotenv = require('dotenv').config(); // added parentheses
const app = express();
const port = 5000;
const colors = require('colors')
const { errorHandler } = require('./middlewears/errorMiddleware');
const connectDB = require('./config/db')
const cors = require('cors');

// Add this line before defining your routes
app.use(cors());

// Define your routes below

connectDB()

//Middleware
//*****************
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
//*****************

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'))
app.get('/', (req, res) => {
    res.send('<h1 style="text-align:center;margin-top:5rem;color:lightblue;">Welcome</h1>')
})
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
app.listen(port, () => console.log(`Port listening on http://localhost:${port}`.blue.italic.underline));


