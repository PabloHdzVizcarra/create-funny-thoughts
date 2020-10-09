const { MongoClient } = require("mongodb")

const uri =
  "mongodb+srv://pablo_admin:_seguimos182@practice-apps.yuycn.mongodb.net/funny-toughts?retryWrites=true&w=majority"
  
exports.sendForm = async (req, res) => {
    
  const client = new MongoClient(uri, {useUnifiedTopology: true})
  const acces = await client.connect()
  const db = acces.db('funny-toughts')
  const tought = await db.collection('toughts').insertOne(req.body)
  console.log('Se guarda con exito el pensamiento')
  
  res.json(tought)

} 

exports.getDataFromDB = async (req, res) => {
  const client = new MongoClient(uri, {useUnifiedTopology: true})
  const acces = await client.connect()
  const db = acces.db('funny-toughts')
  const data = await db.collection('toughts').find({}).toArray()

  console.log('Se obtienen con exito los pensamientos de la DB')
  res.json(data)
}
