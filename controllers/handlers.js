const { MongoClient } = require("mongodb")

const uri =
  "mongodb+srv://pablo_admin:_seguimos182@practice-apps.yuycn.mongodb.net/funny-toughts?retryWrites=true&w=majority"

const client = new MongoClient(uri, {useUnifiedTopology: true})


exports.sendForm = async (req, res) => {
  console.log(req.body)

  const acces = await client.connect()
  const db = acces.db('funny-toughts')
  const tought = await db.collection('toughts').insertOne(req.body)
  console.log(tought)
  
  res.json(tought)

} 

exports.getDataFromDB = async (req, res) => {
  const client = new MongoClient(uri, {useUnifiedTopology: true})
  const acces = await client.connect()
  const db = acces.db('funny-toughts')
  
  const data = await db.collection('toughts').find({}).toArray()
  res.json(data)
}
