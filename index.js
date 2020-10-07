const express = require('express')
const { dirname } = require('path')
const app = express()
const port = process.env.PORT || 3000
const Hanblebars = require('express-handlebars')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const router = require('./routers/router')

/* -------------------------------- Mongo DB -------------------------------- */

const { MongoClient } = require('mongodb')
const uri = 
  "mongodb+srv://pablo_admin:_seguimos182@practice-apps.yuycn.mongodb.net/thoughts?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
  useUnifiedTopology: true
})

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("main").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

/* -------------------------------------------------------------------------- */

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', Hanblebars({
  defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "superSecret"
}))

app.get('/', router())

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

