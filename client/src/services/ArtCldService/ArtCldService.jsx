// ArtCldService.js - Client Service for consuming ArtCld API
import axios from "axios";

const BASE_URL = "https://artcloudgalleryapi.azurewebsites.net/";
const API_KEY = "artcloud E673266C-DC81-411D-B91F-898A6D83C8FB";


// TODO hide API key and set header
axios.defaults.headers.common["Authorization"] = API_KEY;

class ArtCldService {
  async getAllArt() {
    const url = `${BASE_URL}/art/`;
    return await axios.get(url).then(resp => resp.data);
  }
}

export default ArtCldService;
