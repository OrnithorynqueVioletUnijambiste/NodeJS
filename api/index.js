var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var routerUsers = require('./routers/users')
var routeProjets = require('./routers/projets')

mongoose.Promise = Promise
mongoose.connect('mongodb+srv://root:issou@cluster0.9ffjp.mongodb.net/root?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log('db connected')
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
})

app.get('/', (req, res) => {
    res.json({status:'ok'})
})

app.use('/users', routerUsers)
app.use('/projets', routeProjets)

app.listen(3001)