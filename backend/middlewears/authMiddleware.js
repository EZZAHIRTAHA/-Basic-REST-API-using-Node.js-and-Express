const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')

// This middleware function is used to protect routes that require authentication

const protect = asyncHandler(async (req, res, next) => {
    let token;
  
    // Check if the Authorization header is present and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        // Get the token from the Authorization header (remove "Bearer " from the beginning)
        token = req.headers.authorization.split(' ')[1];
  
        // Verify the token using the JWT_SECRET environment variable
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        // Get the user associated with the token from the database
        req.user = await User.findById(decoded.id).select('-password');
        
        // Call the next middleware function in the chain
        next();
      } catch (error) {
        console.log(error);
  
        // Return a 401 Unauthorized status code and an error message if the token is invalid or expired
        res.status(401);
        throw new Error('Not authorized');
      }
    }
  
    // If no token was found in the Authorization header, return a 401 Unauthorized status code and an error message
    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  });
  
  module.exports = protect;
  

module.exports = {protect}