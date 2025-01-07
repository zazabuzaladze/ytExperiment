const { google } = require("googleapis");
require("dotenv").config();
const CronJob = require("cron").CronJob;

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT
);

const updateVideo = async () => {
  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  const youtube = google.youtube({
    version: "v3",
    auth: oauth2Client,
  });

  try {
    const result = await youtube.videos.list({
      id: "dwSiNA1J72Y",    //my yt video id
      part: "statistics,snippet",
    });

    if (result.data.items.length > 0) {
      const stats = result.data.items[0].statistics;

      await youtube.videos.update({
        part: "snippet",
        requestBody: {
          id: "dwSiNA1J72Y",
          snippet: {
            title: `This video has ${stats.viewCount} views, and if you subscribe, I will make ${(stats.viewCount * 0.007).toFixed(2)}$`,
            description: `read the subtitles man, dont be lazy1`,
            categoryId: 28,
          },
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateEvery8Mins = new CronJob("*/8 * * * * *", async () => {
  updateVideo();
});

updateEvery8Mins.start();
