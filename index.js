const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port=process.env.PORT || 5000;
const app=express()
const RandomUser = require('randomuser');
const client = new RandomUser();
// middleware
app.use(cors())
app.use(express.json())

const apiData=require("./data.json")
app.get('/user/random',(req,res)=>{
    res.send(apiData.random())
})
app.get('/user/all',(req,res)=>{
    res.send(apiData)
})

app.post('/user/save',(req,res)=>{
    apiData.push(req.body)
    res.send(apiData)
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