require('dotenv').config()
const express = require('express')
const app = express()

const authRoutes = require('./controllers/places')

// app.use('/places', require('./controllers/places'))

app.use('/places', authRoutes)

app.get('/', (req, res) => {
    res.send('Hello world 2!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


app.listen(process.env.PORT, () =>{
    console.log('I am awake')
})