const express = require('express')
const app = express()
const authRoutes = require('./routes/authRoutes')

// middlewares
app.use(express.json())

// variables
const HOST = 'localhost'
const PORT = process.env.PORT || 8888

app.listen(PORT, () => console.log(`server running at http://${HOST}:${PORT}`))

// routes
app.get('/', (req, res)=>{
    res.send("server running")
})

app.use(authRoutes)
