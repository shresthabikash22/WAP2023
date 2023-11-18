const express = require("express");
const path = require('path');
const router = express.Router();


router.get('/user/add', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','add-user.html'))
});

router.post('/user/save', (req,res)=>{
    res.send(`${req.body.fname}, ${req.body.lname}, ${req.body.address}, ${req.body.contact}`);
});

router.delete('/user/delete', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','addUser.html'))
});

router.put('/user/edit', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','addUser.html'))
});

module.exports = router;
