
const express = require('express')

const router = express.Router()

const {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  addUser,
  deleteUser,
  updateUser
} = require('../controllers/userController')

const { protect } = require('../middlewares/authMiddleware')




router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/users', getAllUsers)
router.post('/addUser', addUser)
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);



module.exports = router