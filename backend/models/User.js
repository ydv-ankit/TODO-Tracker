const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

// schemas
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type : String,
        required: true,
        unique: [true, 'email already used'],
        validate: [isEmail, "email is not valid"]
    },
    password:{
        type: String,
        required: true,
        minLength: [8, "password must be 6 characters minimum"]
    },
    dateStamp:{
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
    todoData:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// models
const User = mongoose.model('user', userSchema)
const UserData = mongoose.model('data', dataSchema)

module.exports = {User, UserData}