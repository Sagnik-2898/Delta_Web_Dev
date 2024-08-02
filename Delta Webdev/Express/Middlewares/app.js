const express = require('express')
const app = express()
const port = 8080


app.use((req,res,next)=>{
    console.log("Heyy I was called")
    next()
})

app.use((req,res,next)=>{
    console.log("Hey I was called 2")
    next()
})


app.get("/",(req,res)=>{
    res.send("Hello World")
    console.log("Root")
})

app.get("/random",(req,res)=>{
    res.send("Hello World 2")
    console.log("Random")
})

app.listen(port,()=>{
    console.log(`Port is listening on ${port}`)
})