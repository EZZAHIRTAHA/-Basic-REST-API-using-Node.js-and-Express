const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')

const protect = asyncHandler(async (req, res, next) => {
    let token
})

module.exports = {protect}