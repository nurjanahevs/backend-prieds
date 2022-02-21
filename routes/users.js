const express = require("express");
const userRouter = express.Router();
const User = require("../models/User.model");
const userController = require("../controllers/userController");


userRouter.post("/", userController.register);
userRouter.get("/", async (req, res) =>{
  try {
    const result = await User.find();
    res.status(200).json({ message: "patient data list", data:result});
  } catch (err) {
    next(err);
  }
});

userRouter.get("/:id", async (req, res) =>{
  const { id } = req.params;
  try {
    const result = await User.findById(id);
    res.status(200).json({
      message: "patient data by id has showed",
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = userRouter;