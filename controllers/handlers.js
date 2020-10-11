const { deleteElement, createItemInCollectionDB, getAllDataFromMongoDB } = require("../lib/operationsMongoDB");

exports.sendForm = async (req, res) => {
  const result = await createItemInCollectionDB(req.body)
  console.log('CREATE DOC')

  res.json(req.body);
};

exports.getDataFromDB = async (req, res) => {
  const dataFromMongoDB = await getAllDataFromMongoDB()
  console.log('GET ALL DOCS IN COLLECTION')
  res.json(dataFromMongoDB);

};

exports.deleteElement = async (req, res) => {
  deleteElement(req.body)
  console.log('DELETE DOC')
  res.json(req.body)
};
