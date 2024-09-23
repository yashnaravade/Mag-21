import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

// @route    POST /api/users/register
// @desc     Register a new user
// @access   Public
router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password, // Password will be hashed by mongoose pre-save middleware
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        message: "Registration successful",
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  })
);

// @route    POST /api/users/login
// @desc     Authenticate user and get token
// @access   Public
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        message: "Login successful",
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  })
);

export default router;
