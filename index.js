const express = require('express')
const port = require('./config').PORT || 4000
const app = express()
const Hanblebars = require('express-handlebars')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const router = require('./routers/router')
const cookieParser = require('cookie-parser')

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', Hanblebars({
  defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.use(cookieParser("dataSecret"))
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "superSecret"
}))

app.use('/', router())

app.use((req, res) => {
  res.status(404).render('404', {
    layout: false
  })
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Error en el servidor')
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

