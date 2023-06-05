const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const User = require('../models/userModel');
const { register, login, getUser } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authenticate'); // Import the authenticate middleware

router.use(bodyParser.json());

router.post('/create-user', register);
router.post('/login', login);
router.get('/user', authenticate, getUser); // Apply authenticate middleware to the getUser route

module.exports = router;
