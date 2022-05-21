import express from 'express'

const PORT = 8080
const app = express()

app.get('/', (req, res) => {
    return res.send('Welcome to my server')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})