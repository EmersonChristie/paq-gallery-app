// const { RESTDataSource } = require("apollo-datasource-rest");

// const BASE_URL = "https://artcloudgalleryapi.azurewebsites.net/";
// const API_KEY = `${process.env.ARTCLD_API_KEY}`;

// class Artwork extends RESTDataSource {
//   constructor() {
//     super();
//     this.baseURL = BASE_URL;
//   }

//   willSendRequest(request) {
//     request.headers.set(
//       "Authorization",
//       "artcloud E673266C-DC81-411D-B91F-898A6D83C8FB"
//     ); //TODO env variables
//   }
//   //TODO Error Checking
//   async getArt() {
//     const res = await this.get(`art`);
//     return res.Artwork; // TODO .artwork
//   }
// }

// module.exports = Artwork;
