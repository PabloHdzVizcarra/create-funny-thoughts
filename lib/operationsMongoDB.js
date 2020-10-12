require('dotenv').config({ path: "variables.env" })
const { MongoClient } = require("mongodb");

exports.deleteElement = async (data) => {
  const uri = process.env.URI_MONGODB
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

exports.createItemInCollectionDB = async (data) => {
  const uri = process.env.URI_MONGODB
  const client = new MongoClient(uri, { useUnifiedTopology: true })

  async function run() {
    try {
      await client.connect()
      const db = client.db(process.env.DATA_BASE)
      const arrayCollections = await db.listCollections().toArray()

      if (!arrayCollections[0].name === process.env.COLLECTION_NAME) {
        db.createCollection("toughts", {
          validator: {
            $jsonSchema: {
              bsonType: "object",
              required: ["title", "tought"],
              properties: {
                title: {
                  bsonType: "string",
                  description: "must be a string and is required"
                },
                tought: {
                  bsonType: "string",
                  minLength: 3,
                  description: "Must be a string and is required"
                }
              }
            }
          }
        })
      }

      const docFromDB = await db.collection(process.env.COLLECTION_NAME).insertOne(data)
      
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
    console.dir('Successfully get all data ')
    return data

  } catch (error) {
    console.dir(error)
  } finally {
    client.close()
  }

}