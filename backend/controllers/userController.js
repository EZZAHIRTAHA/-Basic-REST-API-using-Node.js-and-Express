const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')

//@desc Get Users
//@route POST api/Users
//@access Private => Public
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('All fields are required')
    }
    // userExist
    const userExist = await User.findOne({email})
    if(userExist) {
        res.status(400)
        throw new Error('User already exists')
    }
    // hash/encrypt password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // create user
    const user = await User.create({name, email, password: hashedPassword})

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc Login
//@route POST api/Users/login
//@access Private => Public

const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login User'})

})
//@desc Login
//@route GET api/Users/login/@me
//@access Private => Public

const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User Data '})

})












module.exports= {registerUser, loginUser, getMe}