const express = require("express");
const { VideoModel } = require("../Model/youtube.model");
const APIRouter = express.Router();
require("dotenv").config();

APIRouter.get("/videos", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const skip = (page - 1) * limit;

    const videos = await VideoModel.find()
      .sort({ publishTime: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
APIRouter.get("/search", async (req, res) => {
  try {
    const q = req.query.q;
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const skip = (page - 1) * limit;

    const videos = await VideoModel.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ],
    })
      .sort({ publishTime: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  APIRouter,
};
