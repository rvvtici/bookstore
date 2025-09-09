// import mongoose from "mongoose";
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;
