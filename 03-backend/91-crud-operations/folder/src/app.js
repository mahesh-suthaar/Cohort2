const express = require('express')
const noteModel = require('./models/notes.model')

const app = express()
app.use(express.json())

app.post('/notes', async (req,res)=>{
    const {tittle, description} = req.body

    const note = await noteModel.create({
        tittle, description
    })

    res.status(201).json({
        message: 'note created succesfully',
        note
    })
})

app.get('/notes',async (req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:'note fetched succesfully',
        notes
    })
})


module.exports = app