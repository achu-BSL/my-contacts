const express = require("express")
const router = express.Router()
const {getContact, setContact, getOneContact} = require("../controllers/contactController")

router.route("/").get(getContact)

router.route("/").post(setContact)

router.route("/:id").get(getOneContact)

router.route("/:id").put((req, res)=>{
    res.status(200).json({message : `Update contact for ${req.params.id}`})
})

router.route("/:id").delete((req, res) => {
    res.status(200).json(`Delete contact ${req.params.id}`)
})


module.exports = router