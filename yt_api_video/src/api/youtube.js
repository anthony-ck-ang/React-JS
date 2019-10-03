import axios from "axios";

const KEY = "AIzaSyB50NQz90agwgWK3K8jiadUH5DeIxYSxgE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
