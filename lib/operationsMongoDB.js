const MongoClient = require("mongodb").MongoClient
const config = require('../config')
console.log(config.MONGO_DB);

exports.deleteElement = async (data) => {
  const uri = config.MONGO_DB
  const client = new MongoClient(uri, { useUnifiedTopology: true })

  async function run() {
    try {

      await client.connect()
      const database = client.db(process.env.DATA_BASE)
      const collection = database.collection(process.env.COLLECTION_NAME)
      const result = await collection.deleteOne(data)

      if (result.deletedCount === 1) {
        console.dir("Successfully deleted one document.");
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }

      return ({
        delete: true,
        data
      })
      
    } finally {
      client.close();
    }
  }

  await run().catch(console.dir)
}

exports.createItemInCollectionDB = (data) => {
  MongoClient.connect(config.MONGO_DB, {useUnifiedTopology: true}, async (err, client) => {
    const db = client.db()
    const collection = db.collection('notes-app');
    await collection.insertOne(data)

    client.close()
  })
}

exports.getAllDataFromMongoDB = async () => {
  const uri = config.MONGO_DB
  const client = new MongoClient(uri, { useUnifiedTopology: true })

  try {
    await client.connect()
    const db = client.db(process.env.DATA_BASE)
    const data = await db.collection(process.env.COLLECTION_NAME).find({}).toArray()
    console.dir('Successfully get all data ')
    return data

  } catch (error) {
    console.dir(error)
  } finally {
    client.close()
  }

}