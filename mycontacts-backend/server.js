const express = require("express")
const errorHadler = require("./middleware/errorHadler")
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 3000
const app = express()

connectDb()
app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHadler)


app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
})