const { VideoModel } = require("../Model/youtube.model");
const axios = require("axios");
require("dotenv").config();
async function fetchVideos() {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: "footbal",
          type: "video",
          maxResults: 20,
          key: process.env.APIKey,
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

    await VideoModel.insertMany(videosdata);
  } catch (error) {
    console.error(error.message);
  }
}
setInterval(fetchVideos, 10000);
