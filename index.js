const express=require('express')
const app=express()
require('dotenv').config()
var bodyParser=require("body-parser")
const route=require('./route/email')

app.use(express.json())
app.use('/',route)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

const port=process.env.PORT || 3000
app.listen(port,()=>console.log('listening to port'+port+'...'))