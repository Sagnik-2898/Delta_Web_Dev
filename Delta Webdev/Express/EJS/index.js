const express = require("express")
const app = express()
const path = require("path")

const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log("hello World")
})

app.get("/epp",(req,res) => {
    res.render("epp.ejs")
})
app.get("/rolldice",(req,res)=>{
    res.render("rolldice.ejs")
})
app.use(express.static(path.join(__dirname,"/public")))

app.get("/ig/:username",(req,res)=>{
    // const followers = ["Captain","Dil Se","Royal Stag"," Old Monk"]
    let { username } = req.params;
    const instadata = require("./data.json")
    const data = instadata[username]
    console.log(data)
    if(data){
        res.render("ig.ejs",{ data })
    }else{
        res.render("invalid.ejs")
    }
    
})