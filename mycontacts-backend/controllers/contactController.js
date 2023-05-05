const asyncHandler = require("express-async-handler")

//@desc Get all contacts
//@route Get api/contacts
//@access public
const getContacts = asyncHandler ((req, res) => {
    res.status(200).json({message : "Get all contacts"})
})

//@desc Create contact
//@route POST api/contacts/id:
//@access public
const createContact = asyncHandler ((req, res) => {
    console.log(req.body)
    const {name, email} = req.body
    if(!name || !email){
        res.status(400)
        throw new Error("All feilds are mandatory!")
    }
    res.status(200).json({message : "Create contact"})
})

//@desc get contact
//@route GET api/contacts/id:
//@access public
const getContact = asyncHandler ((req, res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`})
})

//@desc update contact
//@route PUT api/contacts/id:
//@access public
const updateContact = asyncHandler ((req, res) => {
    res.status(200).json({message : `Update contact for $`})
})

//@desc delete contact
//@route DELETE api/contacts/id:
//@access public
const deleteContact = asyncHandler ((req, res) => {
    res.status(200).json(`Delete contact ${req.params.id}`)
})

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact,
    deleteContact
}