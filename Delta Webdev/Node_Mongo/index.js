const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080;
const path = require('path');
const Chat = require("./models/chat.js")
const methodoverride = require('method-override');


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(methodoverride("_method"))

// let chat1 = new Chat({
//     from:"Sagnik",
//     to:"Mohini",
//     msg:"I love you",
//     created_at: new Date()
// })

// chat1.save()
//     .then((res)=>{
//         console.log(res)
//     })



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}
main()
    .then(() => {
        console.log("Connection is running")
    })
    .catch(() => {
        console.log("Error")
    })

//Home ROute
app.get("/", (req, res) => {
    res.send("Express is Working fine !");
})

//Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats })
})


//New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})

//Add Chats Route
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    let newChat = new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date()
    });
    newChat.save()
        .then((res)=>{
            console.log("Data Saved")
        })
        .catch((err)=>{
            console.log(err)
        })
    res.redirect("/chats")
    
})

//Edit Route
app.get("/chats/:id/edit", async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat})
})

//Update Route
app.put("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let {msg:newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,
        {msg:newMsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat)
    res.redirect("/chats")
})

//Destroy Route
app.delete("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})


app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})