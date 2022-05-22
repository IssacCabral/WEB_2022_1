import mongoose from 'mongoose'

const mongoDB_URI = 'mongodb://127.0.0.1:27017/crud_students_professors'

mongoose.connect(mongoDB_URI).then((connection) => {
    console.log('Connected to database')
}).catch((error) => {
    console.log(error)
})