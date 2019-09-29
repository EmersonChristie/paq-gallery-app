// ArtCldService.js - Client Service for consuming ArtCld API
import axios from "axios";

const BASE_URL = `${process.env.ARTCLD_API_KEY}`;
const API_KEY = `${process.env.ARTCLD_API_URL}`;


// TODO hide API key and set header
axios.defaults.headers.common["Authorization"] = API_KEY;

class ArtCldService {
  async getAllArt() {
    const url = `${BASE_URL}/art/`;
    return await axios.get(url).then(resp => resp.data);
  }
}

export default ArtCldService;
