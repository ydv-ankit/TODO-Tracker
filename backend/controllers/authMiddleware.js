const jwt = require('jsonwebtoken')

const mySecretKey = process.env.secret_key

const requireLogin = (req, res, next) => {
    console.log(req.cookies)
    const jwtCookie = req.cookies.jwt
    if (jwtCookie) {
        const auth = jwt.verify(jwtCookie, mySecretKey)
        console.log("auth: ", auth)
    }
    next()
}

module.exports = requireLogin