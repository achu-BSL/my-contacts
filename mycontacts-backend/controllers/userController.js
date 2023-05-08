const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

//@desc Register a User
//@route POST /users/register
//@access public
const register = asyncHandler(async (req, res)=>{
    const {username, email, password} = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are manditory!")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("User already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("Hashed password " + hashedPassword)
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    console.log(`User crated ${user}`)

    if(user){
        res.status(201).json({__id: user.id, email: user.email})
    } else {
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.json({message: "Register the user"})
}) 

//@des User Login
//@roure POST /users/login
//@access public
const loginUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error("All fields are maditory!")
    }
    const user = await User.findOne({email})
    //compared password with hashedpassword
    if(user && (await bcrypt.compare(password, user.password))){
        console.log("inside")
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "15m"}
        )
        res.status(200).json({accessToken})
    } else {
        res.status(401)
        throw new Error("Email or Password is not valid")
    }
    res.json({message: "Login user"})
})

//@desc Current User
//@rout GET /users/current
//@access private
const current = asyncHandler(async (req, res)=>{
    res.json(req.user)
}) 

module.exports = {
    register,
    loginUser,
    current
}