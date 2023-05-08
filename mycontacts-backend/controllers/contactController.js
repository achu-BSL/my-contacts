const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route Get api/contacts
//@access public
const getContacts = asyncHandler (async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts)
})

//@desc Create contact
//@route POST api/contacts/id:
//@access public
const createContact = asyncHandler (async(req, res) => {
    const {name, email, phone} = req.body
    if(!name || !email || !phone ){
        res.status(400)
        throw new Error("All feilds are mandatory!")
    }
    const contact = await Contact.create({
        name, 
        email,
        phone,
        user_id: req.user.id,
        admin: "AchuBSL"
    })
    console.log(contact)
    res.status(200).json(contact)
})

//@desc get contact
//@route GET api/contacts/id:
//@access public
const getContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact Not Found!")
    }
    res.status(200).json(contact)
})

//@desc update contact
//@route PUT api/contacts/id:
//@access public
const updateContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("User Dont have permision to update other contacts")
    }

    const updatadContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
        )
    res.status(200).json(updatadContact)
})

//@desc delete contact
//@route DELETE api/contacts/id:
//@access public
const deleteContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found!")
    }
  
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("User Dont have permision to update other contacts")
    }

    await Contact.deleteOne({_id: req.params.id})
    res.status(200).json(contact)
})

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact,
    deleteContact
}