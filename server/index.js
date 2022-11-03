require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())


app.post('/', (req, res) => {
    console.log(req.body)
    res.json({message: 'POST it is work'})
})

app.get('/', (req, res) => {
    res.json({message: 'GET it is work'})
})

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()