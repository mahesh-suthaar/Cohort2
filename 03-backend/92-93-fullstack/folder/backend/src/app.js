const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())

app.post("/api/notes", async (req, res) => {
  const { tittle, description } = req.body;

  const note = await noteModel.create({
    tittle,
    description,
  });

  res.status(201).json({
    message: "Note created succesfully",
    note,
  });
});

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "Notes fetched succesfully",
    notes,
  });
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;

  const note = await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "Note deleted succesfully",
    note
  });
});

app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;

  const note = await noteModel.findByIdAndUpdate(id, {
    description: description,
  });

  res.status(200).json({
    message: "Note updated succesfully",
    note,
  });
});

module.exports = app;
