const jwt = require('jsonwebtoken')
const { UserData } = require('../models/User')
const mySecretKey = process.env.secret_key

module.exports.add_item = async (req, res) => {
    try {
        const { data, isOpen = true, isWorking = false, isCompleted = false } = req.body
        const jwtCookie = req.cookies.jwt
        if (jwtCookie) {
            const auth = jwt.verify(jwtCookie, mySecretKey)
            const user = await UserData.create({ userID: auth.userID, data: data, isOpen: isOpen, isWorking: isWorking, isCompleted: isCompleted })
            console.log(user)
            res.send({ "success": "data added" })
        } else {
            console.log("not authorized")
            res.send({ 'error': 'login required' })
        }
    } catch (error) {
        console.log(error)
        res.send({ "error": "cannot add data" })
    }
}