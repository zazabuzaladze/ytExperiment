const { google } = require("googleapis");
require("dotenv").config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const getTokens = async () => {
  const res = await oauth2Client.getToken(
    ""
  );
  console.log(res.tokens);
};

getTokens();
