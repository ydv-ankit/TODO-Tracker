const { Router } = require('express')
const authController = require('../controllers/authController')
const services = require('../controllers/services')
const requireLogin = require('../controllers/authMiddleware')

const router = Router()

// authentication
router.post('/signup', authController.signup_post)
router.post('/login', authController.login_post)

// working with data
router.post('/add', services.add_item)

module.exports = router;