//@desc Get all contacts
//@route Get api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"})
}
const setContact = (req, res) => {
    res.status(200).json({message : "Create contact"})
}

const getOneContact = (req, res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`})
}

const updateContact = (req, res) => {
    res.status(200).json({message : `Update contact for $`})
}

module.exports = {getContact, setContact, getOneContact}