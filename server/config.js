// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  artCldUrl: process.env.ARTCLD_API_URL,
  artCldKey: process.env.ARTCLD_API_KEY,
  mongoUser: process.env.MONGO_USER,
  mongoPwd: process.env.MONGO_PWD,
  mongoDB: process.env.MONGO_DB
};
