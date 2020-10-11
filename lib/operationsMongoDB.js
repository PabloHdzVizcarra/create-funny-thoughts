require('dotenv').config({ path: "variables.env" })
const { MongoClient } = require("mongodb");

const uri = process.env.URI_MONGODB
const client = new MongoClient(uri, { useUnifiedTopology: true })

exports.deleteElement = async (data) => {
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

exports.createItemInCollectionDB = async (data) => {
  async function run() {
    try {
      await client.connect()
      const database = client.db(process.env.DATA_BASE)
      const docFromDB = await database.collection(process.env.COLLECTION_NAME).insertOne(data)
      
      if (docFromDB.insertedCount === 1) {
        console.dir("Successfully added one document.");
        return data
      } else {
        console.log("Error dont insert document");
      }
      
    } finally {
      client.close()
    }

  }

  await run().catch(console.dir)
}

exports.getAllDataFromMongoDB = async () => {
  const uri = process.env.URI_MONGODB
  const client = new MongoClient(uri, { useUnifiedTopology: true })

  try {
    await client.connect()
    const db = client.db(process.env.DATA_BASE)
    const data = await db.collection(process.env.COLLECTION_NAME).find({}).toArray()
    return data

  } catch (error) {
    console.dir(error)
  } finally {
    client.close()
  }
}