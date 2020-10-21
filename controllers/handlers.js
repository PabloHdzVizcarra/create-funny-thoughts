const { Thought } = require('../models/thought-schema')

exports.sendForm = async (req, res) => {
  console.log('Sending data')
  console.log(req.body)

  try {
    
    const thought = new Thought(req.body)
    const result = await thought.save()
  
    res.status(201).json(result)
  } catch (error) {
    
    res.status(400).json({error: "Ocurrio un error"})
  }

}

exports.getDataFromDB = async (req, res) => {
  const dataFromMongoDB = await getAllDataFromMongoDB()
  res.json(dataFromMongoDB);

};

exports.deleteElement = async (req, res) => {
  deleteElement(req.body)
  res.json(req.body)
};
