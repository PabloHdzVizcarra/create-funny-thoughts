const { body, validationResult } = require('express-validator');

const thougthValidationRules = () => [
  body('title').isString(),
  body('title').isLength({ min: 5 })
    .withMessage('el titulo debe ser minimo 5 caracteres'),
  body('tought').isString(),
  body('tought').isLength({ min: 3 })
    .withMessage('el pensamiento debe ser de almenos 3 caracteres'),
]

const validateThougth = (req, res, next) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    console.log('No hubo errores');
    return next()
  }

  const extractedErrors = []
  errors.array().map(err => extractedErrors.push(err.msg))
  
  console.log(extractedErrors);
  return res.status(422).json({
    errors: extractedErrors,
  })

}

module.exports = {
  thougthValidationRules,
  validateThougth
}