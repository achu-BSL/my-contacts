const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 3000
const app = express()

app.use("/api/contacts", require("./routes/contactRoutes"))
// This middleware contains a set of route handlers that will handle requests to the /api/contacts route.

app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
})