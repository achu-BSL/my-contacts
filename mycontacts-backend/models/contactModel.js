const mongoose = require("mongoose")

const contactShcema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
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