import express, {json} from 'express'
import env from 'dotenv'
import mainRouter from './routes/mainRouter'
import cors from 'cors'

env.config()

const PORT = process.env.SERVER_PORT
const app = express()

app.use(json())
app.use(mainRouter)
app.use(cors())

app.get('/', (req, res) => {
    res.send(`Main Router xD`)
})

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})