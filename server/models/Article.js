// backend/models/Article.js
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  categories: {
    type: [String], // Array of strings for categories
  },
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
