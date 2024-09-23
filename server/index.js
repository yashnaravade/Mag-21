import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import articlesRouter from "./routes/articles.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.use("/api/articles", articlesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Magazine API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
