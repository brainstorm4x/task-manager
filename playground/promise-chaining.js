require('../src/db/mongoose')
const User = require('../src/models/user')

// 5e5625f9d87ad128ecb2dc01

// User.findByIdAndUpdate('5e56223217febd26a9ca31e7', { age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5e56223217febd26a9ca31e7', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log9e
})