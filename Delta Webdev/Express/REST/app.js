const express = require("express")
const port = 8080
const app = express();
const path = require("path")

var methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")));

const { v4: uuidv4 } = require('uuid');





app.listen(port, () => {
    console.log(`App is Listening on port ${port}`)
})
app.get("/",(req,res)=>{
    res.render("Home.ejs")
})

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})
app.post("/posts", (req, res) => {
    let id =uuidv4();
    let { username, content } = req.body;
    posts.push({ id, username, content })
    res.redirect("/posts")
})



let posts = [
    {
        id: uuidv4(),
        username: "SagnikBanerjee",
        content: "I am radiant"
    },
    {
        id: uuidv4(),
        username: "AvinashZB",
        content: "I got iron 3"
    },
    {
        id: uuidv4(),
        username: "RounakChatterjee",
        content: "I got bronze 3"
    },
]

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs",{post})
})

app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id)
    post.content = newContent;
    console.log(post)
    res.redirect("/posts")
})

app.get("/posts/:id/edit",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("edit.ejs",{post})
})
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts")
})