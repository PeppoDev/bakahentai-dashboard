import axios from "axios";

const api = axios.create({
  baseURL: "https://bakahentai.org/",
  headers: { Authorization: "Basic QmFrYUhlbnRhaTpCYWthSGVudGFpITIz" },
});

export default api;
