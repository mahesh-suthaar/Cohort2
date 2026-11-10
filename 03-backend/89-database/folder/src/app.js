const express = require('express')

const app = express()
app.use(express.json()) //middleware

const notes = [] //Notes array

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({"message":"note created succesfully"})
})
app.delete('/notes/:idx',(req,res)=>{
    delete notes[req.params.idx]
    res.status(200).json({"message":"note deleted succesfully"})
})
app.get('/notes',(req,res)=>{
    res.send(notes)
    res.status(200).json({"message": "note fetched succesfully"})
})
app.patch('/notes/:idx',(req,res)=>{
    notes[req.params.idx].desc = req.body.desc
    res.status(200).json({"message": "note updated succesfully"})
})


module.exports = app