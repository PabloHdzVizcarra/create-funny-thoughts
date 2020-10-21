require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || '3000',
  MONGO_DB: process.env.MONGO_DB || 'mongodb://localhost:27017/notes-app'
}