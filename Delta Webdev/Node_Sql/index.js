const { faker, Faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const express = require('express');
const port = "8080"
const app = express();
const path = require("path");
const methodOverride = require("method-override")

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mysql_app',
  password: 'Sagnik@2003'
})

// let q = "INSERT INTO user(id,username,email,password) VALUES ?";

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}


// try{
//     connection.query(q,[data],(err,result)=>{
//         if (err) throw err;
//         console.log(result);
//     })
// }catch{
//     console.log(err);
// }

// connection.end();


//Home Route

app.get("/", (req, res) => {
  let q = `select count(*) from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"]
      res.render("index.ejs", { count })
      // console.log(result);
      // res.send(result)

    })
  } catch {
    console.log(err);
    res.send(err);
  }
})

//Show Route

app.get("/users", (req, res) => {
  let q = `select * from user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("show.ejs", { users })

    })
  } catch {
    console.log(err);
    res.send(err);
  }
})

//edit route

app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;

  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user })
    })
  } catch {
    console.log(err);
    res.send("Some err happenned in Backend");
  }
})

//Update Route

app.patch("/users/:id", (req, res) => {
  // res.send("Updated")
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;

  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Wrong Password")
        console.log(formPass);
        console.log(user.password);
      } else {
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id ='${id}' `
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/users");
        })
      }

    })
  } catch (err) {
    console.log(err);
    res.send("Some err happenned in Backend");
  }
})

// ADD Route

app.post("/users/new", (req, res) => {
  
  let id = faker.string.uuid();
  
  let { username, password, email } = req.body;
   console.log(req.body,id)

  let q = `INSERT INTO user(id, username, email, password) VALUES (?,?,?,?)`;

  try {
    connection.query(q, [id, username, email, password],(err, result) => {
      if (err) throw err;
      res.redirect("/users")
    })
  } catch (err) {
    console.log(err);
    res.send("Some err happenned in Backend");
  }
})

//Add form route
app.get("/users/add",(req,res)=>{
  res.render("add.ejs")
})

//Delete Route

app.get("/users/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/users/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/users");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});




app.listen("8080", () => {
  console.log("App is listening on port 8080")
})