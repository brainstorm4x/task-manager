//CRUD Create, Read, Update and Delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    // console.log('Connected correctly!')

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: "Jen",
    //         age: 28
    //     }, {
    //         name: "Gunther",
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert documents!")
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Go to bank today",
    //         completed: true
    //     }, {
    //         description: "Walk the dog",
    //         completed: true
    //     }, {
    //         description: "Get milk from shop",
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Count not insert documents!")
    //     }

    //     console.log(result.ops)
    // })

   // db.collection('users').findOne({name: "Jen"}, (error, user) => {
    //     if (error) {
    //         return console.log("Unable to fetch the user")
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 27}).toArray((error, users) => {
    //     if (error) {
    //         return console.log("Unable to find the users")
    //     }

    //     console.log(users)
    // })

    // db.collection('users').find({age: 27}).count((error, count) => {
    //     if (error) {
    //         return console.log("Unable to count the users")
    //     }

    //     console.log(count)
    // })

        // db.collection('tasks').findOne({ _id: new ObjectID("5e5367eb12e42a1fc13e03a9")}, (error, task) => {
    //     if (error) {
    //         return console.log("Unable to fetch the tasks")
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, status) => {
    //     if (error) {
    //         return console.log("Unable to fetch completed tasks")
    //     }

    //     console.log(status)
    // })

        // db.collection('users').updateOne({
    //     _id: new ObjectID("5e53639b2e02e31f16fe5358")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e53639b2e02e31f16fe5358")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)        
    // }).catch((error) => {
    //     console.log(error)
    // })

})