// Yt Videos model

const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    publishTime: { type: Date },
    thumbnail: { type: String },
  },
  {
    versionKey: false,
  }
);

const VideoModel = mongoose.model("video", VideoSchema);

module.exports = {
  VideoModel,
};
