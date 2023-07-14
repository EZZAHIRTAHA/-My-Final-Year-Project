
const express = require('express')

const router = express.Router()

const {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
} = require('../controllers/userController')

const { protect } = require('../middlewares/authMiddleware')




router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/users', getAllUsers)


module.exports = router