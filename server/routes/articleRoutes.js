import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

// Create a new article
router.post("/", async (req, res) => {
  const { title, content, author, category } = req.body;
  try {
    const newArticle = new Article({ title, content, author, category });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ message: "Error creating article" });
  }
});

// Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles" });
  }
});

export default router;
