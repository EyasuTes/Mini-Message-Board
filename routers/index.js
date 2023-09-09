const express = require('express')
const messages =require('../models/messages')
const router =express.Router();

router.get('/', (req,res)=>res.render('index', { title: "Mini Messageboard", messages: messages }))

router.get('/new', (req,res)=>{
    res.render('form')
})

router.post('/new', (req,res)=>{
    console.log(req.body.name)
    messages.push({text: req.body.text, user: req.body.name, added: new Date()});
    res.redirect('/')
    console.log(messages)
})
module.exports=router;