const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// User Model

// const User = mongoose.model('User', {
//         name: {
//             type: String,
//             required: true,
//             trim: true
//         }, 
//         password: {
//             type: String,
//             required: true,
//             trim: true,
//             validate(value) {
//                 if (validator.equals(value, 'password')) {
//                     throw new Error('You cannot have word password as you password')
//                 } else if (!validator.isLength(value, {min:7})) {
//                     throw new Error('Your password cannot be less then 6 characters')
//                 }
//             }
//         },
//         email: {
//             type: String,
//             required: true,
//             trim: true,
//             lowercase: true,
//             validate(value) {
//                 if (!validator.isEmail(value)) {
//                     throw new Error('Email is invalid')
//                 }
//             }
//         },
//         age: {
//            type: Number,
//            default: 0,
//            validate(value) {
//                if (value < 0) {
//                    throw new Error('Age must be a positive number')
//                }
//            }
//         }
// })

// const me = new User({
//     name: '  Andrew  ',
//     email: ' MyEMAIL@zap.com ',
//     password: 'square4'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// TASK Model

// const Tasks = mongoose.model('Tasks', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     }, 
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Tasks({
//     description: 'Go To Gym',
// })

// task.save().then((error) => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })