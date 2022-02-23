require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')


// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
    res.render('home')
  })


app.get('*', (req, res) => {
    res.render('error404')
})

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
 })

const PORT = process.env.PORT || 3000

// Listen for Connections
// app.listen(process.env.PORT)
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
