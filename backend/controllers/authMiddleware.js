const jwt = require('jsonwebtoken')

const mySecretKey = process.env.secret_key

const requireLogin = (req, res, next) => {
    const jwtCookie = req.cookies.jwt
    if (jwtCookie) {
        const auth = jwt.verify(jwtCookie, mySecretKey)
        console.log(auth)
        res.send({"success" : auth})
    } else {
        console.log("not authorized")
        res.send({ 'error': 'login required' })
    }
}

module.exports = requireLogin