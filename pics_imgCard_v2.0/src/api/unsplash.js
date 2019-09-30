import axios from "axios";

//customized pre-config instance
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID db5626aaf8cff3cc07e758a149030775d432644e8f2fe51909e8a6895361f962"
  }
});
