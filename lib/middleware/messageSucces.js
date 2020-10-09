exports.sendMessage = (req, res, next) => {
  res.locals.sendMessage = 'Felicidades enviaste con exito'
  next()
}