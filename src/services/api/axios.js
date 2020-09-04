import axios from "axios";

const api = axios.create({
  baseURL: "https://bakahentai.org/",
  //   baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default api;
