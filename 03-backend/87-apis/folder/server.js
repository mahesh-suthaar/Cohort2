const express = require('express')
const app = express()
app.use(express.json()) // Middleware

const notes = [] //Notes array

app.post('/notes',(req,res)=>{
    res.send('note created succesfully')
    notes.push(req.body)
    console.log(req.body)
})
app.get('/notes',(req,res)=>{
    res.send(notes)
})
app.delete('/notes',(req,res)=>{
    notes.splice(req.body.id, 1)
    res.send('Note deleted succesfully')
})


//Server, Port: 3000
app.listen(3000,()=>{
    console.log('server in running on port 3000')
})