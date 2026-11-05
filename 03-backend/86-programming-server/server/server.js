const app = require('express')()

app.get('/',(req,res)=>{
    res.send('This is Home Page')
})
app.get('/about',(req,res)=>{
    res.send('This is About Page')
})

app.listen(3000,()=>{
    console.log('server in running on port 3000')
})