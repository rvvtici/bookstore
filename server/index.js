const express = require("express");
const connectDB = require("./db.js");

require("dotenv/config");
require("./models/Item.js");
const cors = require("cors");
const BookModel = require("./models/Item.js");

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

connectDB();

app.get("/database", (req, res) => {
  BookModel.find({})
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});

app.get("/getBook/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findById({ _id: id })
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});

app.post("/addBook", (req, res) => {
  BookModel.create(req.body)
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});

app.put("/updateBook/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findByIdAndUpdate(
    { _id: id },
    { title: req.body.title, author: req.body.author }
  )
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});

app.delete("/deleteBook/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// app.get("/", (req, res) => {
//   // res.send("Bem-vindo ao Sebo!");
//   const items = itemModel.find();
//   res.json(items);
// });
