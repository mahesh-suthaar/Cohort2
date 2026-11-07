const express = require('express')
const app = express()
app.use(express.json())

let notes = []

app.get('/notes',(req,res)=>{
    res.send(notes)
})
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.send(notes)
    console.log('note created succesfully.')
})
app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index]
    res.send(notes)
    console.log('note deleted succesfully.');
    
})
app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].desc = req.body.desc
    res.send(notes)
    console.log('note updated succesfully.');
    
})


module.exports = app