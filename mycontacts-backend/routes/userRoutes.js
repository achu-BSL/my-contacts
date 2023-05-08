const express = require("express")
const {register, loginUser, current} = require("../controllers/userController")
const validateToken = require("../middleware/validateTokenHandler")
const router = express.Router()

router.post("/register", register)

router.post("/login", loginUser)

router.get("/current", validateToken, current)


module.exports = router