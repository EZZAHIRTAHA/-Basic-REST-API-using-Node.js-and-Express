const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')

//@desc Get Users
//@route POST api/Users
//@access Private => Public
// Register a new user
const registerUser = asyncHandler(async(req, res) => {
    // Get the name, email, and password from the request body
    const {name, email, password} = req.body
    // If any of the required fields are missing, return a 400 error with a message
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('All fields are required')
    }
    // Check if a user with the same email already exists
    const userExist = await User.findOne({email})
    if(userExist) {
        // If a user with the same email already exists, return a 400 error with a message
        res.status(400)
        throw new Error('User already exists')
    }
    // Hash the password before storing it in the database
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // Create a new user object with the name, email, and hashed password
    const user = await User.create({name, email, password: hashedPassword})

    // If the user was successfully created, return a 201 status code with the user's ID, name, and email
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    // If there was an error creating the user, return a 400 error with a message
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc Login
//@route POST api/Users/login
//@access Private => Public

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    // Check For User Email
    const user = await User.findOne({email})
    // If user exists and password matches, return user data as JSON
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
         // If user does not exist or password is incorrect, return error message
    }else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }

})
//@desc Login
//@route GET api/Users/login/@me
//@access Private => PRIVATE (protect routes)

const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User Data '})
})

// Generate JWT (TOKEN)
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}










module.exports= {registerUser, loginUser, getMe}