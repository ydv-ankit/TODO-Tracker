const User = require('../models/User')

module.exports.signup_get = (req, res)=>{
    res.send("sign up get")
}

module.exports.signup_post = (req, res)=>{
    console.log(req.body)
    res.send("sign up post")
}

module.exports.login_get = (req, res)=>{
    res.send("login get")
}

module.exports.login_post = (req, res)=>{
    res.send("login post")
}