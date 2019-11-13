import axios from "axios";

//customized pre-config instance
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      " "
  }
});
