const { deleteElement, createItemInCollectionDB, getAllDataFromMongoDB } = require("../lib/operationsMongoDB");

exports.sendForm = async (req, res) => {
  await createItemInCollectionDB(req.body)

  res.json(req.body);
};

exports.getDataFromDB = async (req, res) => {
  const dataFromMongoDB = await getAllDataFromMongoDB()
  res.json(dataFromMongoDB);

};

exports.deleteElement = async (req, res) => {
  deleteElement(req.body)
  res.json(req.body)
};
