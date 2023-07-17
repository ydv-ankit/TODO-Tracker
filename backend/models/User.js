const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

// schemas
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name required"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email already used'],
        validate: [isEmail, "email is not valid"]
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "password must be 6 characters minimum"]
    },
    dateStamp: {
        type: Date,
        default: Date.now
    }
})


const dataSchema = new mongoose.Schema({
    userID: {
        type: String,
        unique: true,
        required: true
    },
    data: {
        type: String,
        required: true,
    },
    isOpen: {
        type: Boolean
    },
    isWorking: {
        type: Boolean
    },
    isCompleted: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// static methods
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if(user){
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user
        }
        throw new Error("invalid password")
    }
    throw Error("invalid email")
}

// models
const User = mongoose.model('user', userSchema)
const UserData = mongoose.model('data', dataSchema)

module.exports = { User, UserData }