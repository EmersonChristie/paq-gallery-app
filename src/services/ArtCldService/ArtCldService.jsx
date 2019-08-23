// ArtCldService.js - Client Service for consuming ArtCld API
import axios from "axios";

// curl -H "Authorization: artcloud E673266C-DC81-411D-B91F-898A6D83C8FB" https://artcloudgalleryapi.azurewebsites.net/art.json?accessType=DOWNLOAD > input.json

const BASE_URL = "https://artcloudgalleryapi.azurewebsites.net/";
const API_KEY = `${process.env.REACT_APP_ARTCLD_API_KEY}`;
// TODO hide API key and set header
axios.defaults.headers.common["Authorization"] = API_KEY;

class ArtCldService {
  async getAllArt() {
    const url = `${BASE_URL}/art/`;
    return axios.get(url).then(resp => resp.data);
  }
}

export default ArtCldService;
