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

  const dataFromDB = await Thought.find({})
  
  try {
    res.send(dataFromDB)
  } catch (error) {
    res.status(500).send(error)
  }

};

exports.deleteElement = async (req, res) => {
  try {
    const dataDelete = await Thought.findByIdAndDelete(req.params.id)
    if (!dataDelete) res.status(404).send("No item found")
    
    res.status(200).json({
      idElementRemove: req.params.id
    })

  } catch (error) {
    res.status(500).send(error)
  }
}
