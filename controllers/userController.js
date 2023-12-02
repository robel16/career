const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')
const Joi = require('joi')
const storeTokenMiddleware=require('./storeToken')
// const { getPagination } = require('./pagination');
// const { userFilter } = require('./filterandsort');
// const { userSortOptions } = require('./filterandsort');
//@Desc     Register Users
//@route    Post api/users
//access    Public
const registerUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.status(400);
            throw new Error('Please add all fields');
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(209);
            throw new Error('User already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            email,
            password: hashedPassword,
        });

        if (user) {
            const token = generateToken(user._id);
            res.status(201).json({
                _id: user.id,
                email: user.email,
                token: token, // Use the generated token here
                
            });

            // Set the token in localStorage
            res.locals.token = token;
            storeTokenMiddleware(req, res, next);
            
        } else {
            res.status(400);
            throw new Error('Invalid User Data');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

  
//@Desc     Authenticate Users
//@route    Post api/users
//access    Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //check for user email
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credential')
    }
})
//@Desc     Get Users
//@route    Get api/users
//access    Private
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email, role } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
        role
    })
})
const getAllUser = asyncHandler(async (req, res) => {
    // Only allow superadmin to see all users
    if (req.user.role !== 'superadmin') {
        res.status(403);
        throw new Error('Access denied.');
    }
    const { page, limit, name, email, role, sortBy, sortOrder } = req.query;
    const query = userFilter({ name, email, role });
    const { pageNumber, pageSize, jump, totalUsers, totalPages } = await getPagination(page, limit, User, query);
    const sortOptions = userSortOptions(sortBy, sortOrder);
    const users = await User.find(query)
        .sort(sortOptions)
        .skip(jump)
        .limit(pageSize)
        .select('-password');
    res.status(200).json({
        currentPage: pageNumber,
        totalPages,
        totalUsers,
        users,
    });
});
const addAdmin = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //check if user exist
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(209)
        throw new Error('User already Exist')
    }
    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})
const updateUser = asyncHandler(async (req, res) => {
    if (req.user.role !== 'superadmin') {
        res.status(403);
        throw new Error('Access denied.');
    }
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not Found')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(updatedUser)
})
const deleteUser = asyncHandler(async (req, res) => {
    // Only allow superadmin and admin can Delet a job
    if (req.user.role !== 'superadmin') {
        res.status(403);
        throw new Error('Access denied.');
    }
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error(`can't get the Job`)
    }
    await User.findByIdAndDelete(req.params.id, req.body, {
    })
    res.status(200).json({ id: req.params.id })
})
//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}
module.exports = { registerUser, loginUser, getMe, getAllUser, updateUser, deleteUser, addAdmin }