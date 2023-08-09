const express = require('express');
const app = express()

const port = 3000

app.listen(port)

app.get('/',(req,res)=>{
    res.send('Hello World!')
    req
    console.log(req.baseUrl)
    
})

app.get('/ola',(req,res)=>{
    res.send('Ola')
    
})