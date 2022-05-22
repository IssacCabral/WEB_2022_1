import express, { json } from 'express'
import mainRouter from './routes/mainRouter'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// Executa a conexão com o Mongo
require('./config/MongoConn')

const PORT = 8080
const app = express()

import studentRouter from './routes/StudentsRoutes'
import professorRouter from './routes/ProfessorRoutes'

// config
app.use(json())
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(mainRouter)
app.use(cookieParser())
app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/crud/students', studentRouter)
app.use('/crud/professors', professorRouter)

app.get('/', (req, res) => {
    return res.send('Welcome to my server')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})