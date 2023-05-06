const mongoose = require("mongoose")

const contactShcema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add the contact name"]
    }, 
    email: {
        type: String,
        require: [true, "Please add the email address"]
    },
    phone: {
        type: String,
        require: [true, "Please add the Phone Number"]
    }
}, 
{
    timestaps : true
}
)

 module.exports = mongoose.model("Contact", contactShcema)