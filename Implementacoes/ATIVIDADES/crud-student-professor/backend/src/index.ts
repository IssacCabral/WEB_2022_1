import express, {json} from 'express'
import env from 'dotenv'
import mainRouter from './routes/mainRouter'

env.config()

const PORT = process.env.SERVER_PORT
const app = express()

app.use(json())
app.use(mainRouter)

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})