const express = require('express');
const router = express.Router();
const handlers = require('../controllers/handlers');
const { thougthValidationRules, validateThougth } = require('../lib/validations/thoughtValidationRules');


module.exports = () => {

  router.get('/', (req, res) => {
    res.render('home')
  })

  router.post('/',
    thougthValidationRules(),  
    validateThougth,
    handlers.sendForm
  )

  router.get('/api', handlers.getDataFromDB)
  router.delete('/api:id', handlers.deleteElement)

  return router
}