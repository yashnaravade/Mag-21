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
// router.get("/", async (req, res) => {
//   try {
//     const articles = await Article.find();
//     res.status(200).json(articles);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching articles" });
//   }
// });

// Get all articles or search articles

router.get("/", async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      query.category = category;
    }

    const articles = await Article.find(query);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles" });
  }
});

// Get a single article by ID
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching article" });
  }
});

export default router;
