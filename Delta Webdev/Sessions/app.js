const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session')

const sesssionOptions = {
    secret: "Sagniksuper",
    resave: false,
    saveUninitialized: true
}

app.use(session(sesssionOptions));

app.get("/", (req, res) => {
    res.send(`Hello, ${req.session.name}`)
})

app.get("/register", (req, res) => {
    let { name = "Pluto" } = req.query;
    req.session.name = name;
    res.redirect("/")
    
    console.log(req.session);
    
    
})



app.listen(port, (req, res) => {
    console.log(`App is listening at port ${port}`);
})