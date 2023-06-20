const express = require('express')
const app = express()

const HOST = 'localhost'
const PORT = process.env.PORT || 8888

app.get('/', (req, res)=>{
    res.send("server running")
})


app.listen(PORT, () => console.log(`server running at http://${HOST}:${PORT}`))