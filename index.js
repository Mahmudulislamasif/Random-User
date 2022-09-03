const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port=process.env.PORT || 5000;
const app=express()

// middleware
app.use(cors())
app.use(express.json())

const apiData=require("./data.json")
app.get('/users',(req,res)=>{
    res.send(apiData)
})

app.post('/users',(req,res)=>{
    user.push(req.body)
    res.send(user)
})
// app.delete('/users/:id',(req,res)=>{
//     const {id}=req.params;
//     console.log(id)
//     const filter={_id:id};
//     const newUser=user.filter((oneUser)=>oneUser.id!==Number(id))
//     res.send(newUser)


// })
app.get('/',(req,res)=>{
    res.send('Running')
})

app.listen(port,()=>{
    console.log('listening',port)
})