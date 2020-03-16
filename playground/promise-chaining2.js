require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5e5a5d498f240c37f61351c1

// Task.findByIdAndDelete('5e5a695ded265c19ddba4393').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     res.status(500).send(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5e5a695ded265c19ddba4393').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})