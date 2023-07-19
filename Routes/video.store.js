const { VideoModel } = require("../Model/youtube.model");
const axios = require("axios");
require("dotenv").config();

const apiKeys = [
  process.env.APIKey1,
  process.env.APIKey2,
  process.env.APIKey3,
  process.env.APIKey4,
  process.env.APIKey5,
  process.env.APIKey6,
];

let currentApiKeyIndex = 0;

async function fetchVideos() {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: "modi",
          type: "video",
          maxResults: 20,
          key: apiKeys[currentApiKeyIndex],
        },
      }
    );

    const videosdata = response.data.items.map((item) => {
      return {
        title: item.snippet.title,
        description: item.snippet.description,
        publishTime: item.snippet.publishTime,
        thumbnail: item.snippet.thumbnails.medium.url,
      };
    });

    const newVideos = [];
    for (const video of videosdata) {
      const existingVideo = await VideoModel.findOne({
        thumbnail: video.thumbnail,
      });
      if (!existingVideo) {
        newVideos.push(video);
      }
    }
    if (newVideos.length > 0) {
      await VideoModel.insertMany(newVideos);
    } else {
      console.log("No new videos to add.");
    }
  } catch (error) {
    console.error(error.message);
    if (error.response && error.response.status === 403) {
      currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
      console.log("Switched to the next API key.");
    }
  }
}

setInterval(fetchVideos, 10000);
module.exports = {
  fetchVideos,
};
