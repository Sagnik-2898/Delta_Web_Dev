const express = require('express');
const port = 8080;
const app = express();


let checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "granted"){
        next()
    }
    res.send("Wrong")

};

app.get("/api",checkToken,(req,res)=>{
    res.send("Data is Data")
})

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,(req,res)=>{
    console.log("App is listening on port 8080")
});
