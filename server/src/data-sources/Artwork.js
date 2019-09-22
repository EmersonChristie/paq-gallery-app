const { RESTDataSource } = require("apollo-datasource-rest");

// const BASE_URL = "https://artcloudgalleryapi.azurewebsites.net/";
// const API_KEY = `${process.env.ARTCLD_API_KEY}`;

const { artCldUrl, artCldKey } = require("../../config");
// const { artCldKey } = require('../../config');

class Artwork extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = artCldUrl;
  }

  willSendRequest(request) {
    request.headers.set("Authorization", artCldKey); //TODO env variables
  }
  //TODO Error Checking
  async getArt() {
    const res = await this.get(`art`);
    return res.Artwork;
  }
}

module.exports = Artwork;
