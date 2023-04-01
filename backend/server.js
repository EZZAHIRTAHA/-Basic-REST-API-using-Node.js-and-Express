const express = require('express');
const dotenv = require('dotenv').config(); // added parentheses
const app = express();
const port = 5000;
const colors = require('colors')
const { errorHandler } = require('./middlewears/errorMiddleware');
const connectDB = require('./config/db')

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
    res.send('<h1 style="text-align:center;margin-top:5rem;color:lightblue;">Home Page</h1>')
})
app.listen(port, () => console.log(`Port listening on http://localhost:${port}`.blue.italic.underline));


