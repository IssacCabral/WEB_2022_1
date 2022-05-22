import express, { json } from 'express'
import mainRouter from './routes/mainRouter'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// Executa a conexão com o Mongo
require('./config/MongoConn')

const PORT = 8080
const app = express()

app.use(json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(mainRouter)

app.get('/', (req, res) => {
    return res.send('Welcome to my server')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})