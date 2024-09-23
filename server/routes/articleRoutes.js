import express from "express";
import asyncHandler from "express-async-handler";
import { protect } from "../middleware/authMiddleware.js";
import Article from "../models/Article.js";

const router = express.Router();

// Create a new article (Protected route)
router.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const { title, content, author, category } = req.body;

    const newArticle = new Article({ title, content, author, category });
    const savedArticle = await newArticle.save();

    res.status(201).json(savedArticle);
  })
);

// Get all articles or search articles
router.get(
  "/",
  asyncHandler(async (req, res) => {
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
  })
);

// Get a single article by ID
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id);

    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  })
);

export default router;
