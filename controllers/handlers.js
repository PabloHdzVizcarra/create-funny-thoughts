const { MongoClient } = require("mongodb")

const uri =
  "mongodb+srv://pablo_admin:_seguimos182@practice-apps.yuycn.mongodb.net/funny-toughts?retryWrites=true&w=majority"

const client = new MongoClient(uri, {useUnifiedTopology: true})


exports.sendForm = async (req, res) => {
  console.log(req.body)

  const acces = await client.connect()
  const db = acces.db('funny-toughts')
  db.collection('toughts').insertOne(req.body)
  
  const dataFromDatabase = await db.collection('toughts').find({}).toArray()
  const dataSend = { ...dataFromDatabase }
  res.json(dataSend)
  

} 