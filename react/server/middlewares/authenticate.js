const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      res.status(401);
      throw new Error('Authentication failed! Token not found.');
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(401);
      throw new Error('Authentication failed! User not found.');
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error('Authentication failed! Invalid token.');
  }
};

module.exports = { authenticate };
