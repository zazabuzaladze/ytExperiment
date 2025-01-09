const { google } = require("googleapis");
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
require("dotenv").config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT
);

const createThumbnail = async (imagePath, outputPath, stats) => {
  try {
    const image = await loadImage(imagePath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0, image.width, image.height);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, 0, image.width, image.height);

    const text = `This video has ${stats.viewCount} views`;
    const fontSize = Math.floor(Math.min(image.width, image.height) / 7);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const lines = text.split('\n');
    const lineHeight = fontSize + 10;

    const totalTextHeight = lineHeight * lines.length;
    let y = (image.height - totalTextHeight) / 2;

    ctx.shadowColor = 'black';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    lines.forEach(line => {
      ctx.fillText(line, image.width / 2, y);
      y += lineHeight;
    });

    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createJPEGStream();
    stream.pipe(out);
    await new Promise(resolve => out.on('finish', resolve));

    console.log(`Thumbnail saved to ${outputPath}`);
  } catch (err) {
    console.error('Error creating thumbnail:', err);
  }
};

const updateVideo = async () => {
  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  const youtube = google.youtube({
    version: "v3",
    auth: oauth2Client,
  });

  try {
    const result = await youtube.videos.list({
      id: "dwSiNA1J72Y",
      part: "statistics,snippet",
    });

    if (result.data.items.length > 0) {
      const stats = result.data.items[0].statistics;

      await youtube.videos.update({
        part: "snippet",
        requestBody: {
          id: "dwSiNA1J72Y",
          snippet: {
            title: `This video has ${stats.viewCount} views`,
            categoryId: 28,
          },
        },
      });

      const imagePath = 'C:/Users/zaza0/Downloads/background.jpg';
      const outputPath = 'C:/Users/zaza0/Downloads/thumbnail.jpg';
      await createThumbnail(imagePath, outputPath, stats);

      await youtube.thumbnails.set({
        videoId: "dwSiNA1J72Y",
        media: {
          body: fs.createReadStream(outputPath),
        },
      });

      console.log('Thumbnail updated successfully.');
    }
  } catch (error) {
    console.log('Error updating video:', error);
  }
};

updateVideo();
