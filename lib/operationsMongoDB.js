const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://pablo_admin:_seguimos182@practice-apps.yuycn.mongodb.net/funny-toughts?retryWrites=true&w=majority";

require('dotenv').config({ path: "variables.env" })

exports.deleteElement = async (data) => {
  const client = new MongoClient(uri, {useUnifiedTopology: true})

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
    } finally {
      await client.close();
    }
  }

  run().catch(console.dir)
}