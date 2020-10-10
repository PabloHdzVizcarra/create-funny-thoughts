const express = require('express')
const router = express.Router();
const handlers = require('../controllers/handlers')


module.exports = () => {

  router.get('/', (req, res) => {
    res.render('home')
  })

  router.post('/', handlers.sendForm)
  router.get('/api', handlers.getDataFromDB)
  router.delete('/api:id', handlers.deleteElement)

  return router
}