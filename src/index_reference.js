const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
    
// })

// app.use((req, res, next) => {
//         res.status(503).send('The application is under Maintainance! Please try back in 30 minutes.')
// })

app.use(express.json())
app.use(userRouter) 
app.use(taskRouter) 

// Without middleware: new request -> run router handler
// With middleware: new request -> do something -> run route handler

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({_id : 'abcde'}, 'thisismynewcourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const bcryptjs = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcryptjs.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcryptjs.compare(password, hashedPassword)
//     console.log(isMatch)
// }
// myFunction()    

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5e6e309ae3d9886ac2757dd6')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

        const user = await User.findById('5e6e2f1d8767076a0e05ad05')
        await user.populate('tasks').execPopulate()
        console.log(user.tasks)
}

main()


const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5e6e2f1d8767076a0e05ad05')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5e6e2f1d8767076a0e05ad055b')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()