const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  tittle: String,
  description: String,
});

const noteModel = mongoose.model("Notes", noteSchema);

module.exports = noteModel;
