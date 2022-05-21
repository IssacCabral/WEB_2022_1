import mongoose from 'mongoose'

var mongoDB_URI = 'mongodb://localhost:27017/crud_students_professors'
mongoose.connect(mongoDB_URI).then((connection) => {
    console.log('Connected to database')
}).catch((error) => {
    console.log(error)
})