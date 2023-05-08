const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please add the user name"]
    },
    email: {
        type: String,
        require: [true, "Please add the email"],
        unique: [true, "Email has already taken"]
    },
    password: {
        type: String, 
        require: [true, "Please add the user password"]
    }
},
{
    timestaps: true
})

module.exports = mongoose.model("User", userSchema)