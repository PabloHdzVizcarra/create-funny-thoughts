const express = require('express')
const app = express()
const port = process.env.PORT || 3000
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
  res.render('404', {
    layout: false
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

