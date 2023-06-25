const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')

const app = express()

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// variables
const HOST = 'localhost'
const PORT = process.env.PORT || 8080
const dbURI = "mongodb://127.0.0.1:27017/"
const db = "todo-tracker"

// connect with mongoDB
console.log("trying to connect with database...")
mongoose.connect(dbURI + db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("database connected")
        app.listen(PORT, () => console.log("server running at port:" + PORT))
    })
    .catch((err) => console.log(err))

// routes
app.get('/', (req, res) => {
    res.send("server running")
})

app.use(authRoutes)
