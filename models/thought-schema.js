const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  title: String,
  thought: String,
})

const Thought = mongoose.model('notes-app', thoughtSchema)

module.exports = {
  Thought
}
