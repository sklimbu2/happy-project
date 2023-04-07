const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Method", "GET,HEAD,OPTIONS,POST,PATCH,PUT,DELETE")
    res.header("Access-Control-Allow-Headers", "auth-tokem,Origin,X-Requested-With,Content-Type,Accept")
    next()
})

const uri = "mongodb+srv://limbu:55274143@cluster0.paomtlk.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=>{
    console.log("MongoDB connected")
})
.catch(err=>console.log(err))

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})

const commentsRoute = require('./routes/commit')
app.use('/comments', commentsRoute)

app.listen(3000, ()=>console.log("Listening to port 3000"))