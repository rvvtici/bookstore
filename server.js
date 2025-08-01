const http = require("http");
const express = require("express");
const mongodb = require("mongodb")
const bodyParser = require("body-parser");

//npm install express mongodb@4.12 ejs

const app = express ();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', './views');

const server = http.createServer(app);
server.listen(80);
console.log("server running...") // node server - terminal

require("dotenv").config();
const MongoClient = mongodb.MongoClient;
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });

app.post("/login_admin", function(req, res){
  client.db("bookstore").collection("admin").find(
    {user: req.body.user,
    password: req.body.password}
  ).toArray(function(err, items) {

  })
})










app.get("/books", (req,res) =>{
    res.render("books", {resposta: ""})
});

app.get("/admin", (req,res) =>{
    res.render("admin", {resposta: ""})
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})


