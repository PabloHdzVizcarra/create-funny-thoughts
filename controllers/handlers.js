const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://pablo_admin:_seguimos182@practice-apps.yuycn.mongodb.net/funny-toughts?retryWrites=true&w=majority";

const { deleteElement, createItemInCollectionDB } = require("../lib/operationsMongoDB");

exports.sendForm = async (req, res) => {
  const result = await createItemInCollectionDB(req.body)
  console.log(result + "resultado de la consulta")
  console.log(req.body)
  console.log('CREATE DOC')

  res.json(req.body);
};

exports.getDataFromDB = async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  const acces = await client.connect();
  const db = acces.db("funny-toughts");
  const data = await db.collection("toughts").find({}).toArray();

  console.log('GET ALL DOCS IN COLLECTION')
  res.json(data);
};

exports.deleteElement = async (req, res) => {
  deleteElement(req.body)
  console.log('DELETE DOC')
  res.json(req.body)
};
