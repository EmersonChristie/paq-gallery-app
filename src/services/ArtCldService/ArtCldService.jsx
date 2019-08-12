// ArtCldService.js - Client Service for consuming ArtCld API
import axios from "axios";

const BASE_URL = "https://artcloudgalleryapi.azurewebsites.net/";
const API_KEY = process.env.ART_CLD_API_KEY

// TODO hide API key and set header
axios.defaults.headers.common["Authorization"] = API_KEY;

class ArtCldService {
  async getAllArt() {
    const url = `${BASE_URL}/art/`;
    return axios.get(url).then(resp => resp.data);
  }
}

export default ArtCldService;
