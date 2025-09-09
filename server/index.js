// import express from "express";
const express = require("express");
const connectDB = require("./db.js");
// import connectDB from "./db.js";

require("dotenv/config");
// import "dotenv/config";
require("./models/Item.js");
// import "./models/Item.js";
const cors = require("cors");
// import cors from "cors";
const BookModel = require("./models/Item.js");
// import BookModel from "./models/Item.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

connectDB();

// app.get("/", (res, req) => {
//   BookModel.find({})
//     .then((books) => res.json(books))
//     .catch((err) => res.json(err));
// });

app.post("/addBook", (req, res) => {
  BookModel.create(req.body)
    .then((books) => res.json(books))
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
