var express = require('express');
require('dotenv').config()
var router = express.Router();
var {control}=require('../controller/email')
var bodyParser=require("body-parser")

router.use(bodyParser.urlencoded({extended:true}))

router.post("/sending",async(req,res)=>{
    try{
        await control(req.body)
        res.send('success') 
    }
    catch(err){
        res.send(err)
    }    
})

module.exports=router