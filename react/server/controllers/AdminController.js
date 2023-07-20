const Admin = require('../models/adminModel');
const { validationResult } = require('express-validator');

// Step 2: Create an Admin Registration route
const registerAdmin = asyncHandler(async (req, res) => {
  // Get admin data from the request body
  const { username, email, password } = req.body;

  // Validation: Check for any validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error('Invalid admin data');
  }

  // Check if the admin already exists
  const adminExists = await Admin.findOne({ email });
  if (adminExists) {
    res.status(400);
    throw new Error('Admin already exists');
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create the admin
  const admin = await Admin.create({
    username,
    email,
    password: hashedPassword,
  });

  if (admin) {
    res.status(201).json({
      _id: admin.id,
      username: admin.username,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid admin data');
  }
});