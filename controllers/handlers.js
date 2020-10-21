const { db } = require("../lib/operationsMongoDB");
const { Thought } = require('../models/thought-schema')

exports.sendForm = async (req, res) => {

  const thought = new Thought(req.body)
  await thought.save()

  res.json(req.body)
}

exports.getDataFromDB = async (req, res) => {
  const dataFromMongoDB = await getAllDataFromMongoDB()
  res.json(dataFromMongoDB);

};

exports.deleteElement = async (req, res) => {
  deleteElement(req.body)
  res.json(req.body)
};
