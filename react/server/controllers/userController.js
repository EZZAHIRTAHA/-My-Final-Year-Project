const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');
const User = require('../models/userModel');
require('dotenv').config();

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error('Invalid user data');
  }

  // Verify if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error('Invalid user data');
  }

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});


const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the page number from the request query parameter
    const limit = parseInt(req.query.limit) || 10; // Set the limit of users per page (default: 10)

    const skip = (page - 1) * limit; // Calculate the number of documents to skip

    const totalUsers = await User.countDocuments(); // Get the total number of users

    const users = await User.find()
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      users,
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
      totalUsers,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

const addUser = asyncHandler(async(req, res) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error('Invalid user data');
  }

  // Verify if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
})


const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, email }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const wantedUser = await User.findByIdAndDelete(id);

    if (!wantedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({message: "User Deleted Successfully"});
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser
};


// console.log('JWT_SECRET:', process.env.JWT_SECRET);
// console.log('JWT_EXPIRES_IN:', process.env.JWT_EXPIRES_IN);
