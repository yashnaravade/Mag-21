import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import articleRoutes from "./routes/articleRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.use("/api/articles", articleRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Magazine API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
