const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const register = async(req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('All fields Are required')
    }
    const userExist = await User.findOne({email})
    if(userExist) {
        res.status(400)
        throw new Error("User Already Exist")
    }
    const salt = bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const user = await User.create({
        name, email, password: hashPassword
    })
    if(user) {
        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid user data !")
    }
}


const login = async(req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        res.status(400)
        throw new Error('All fields are required')
    }
    const user = User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid Credentials !')
    }
}


const getUser = async (req, res) => {
    const  {_id, name, email } = await User.findById(req.user.id)
        res.status(200).json({ 
            id: _id,
            name, 
            email
        })
}