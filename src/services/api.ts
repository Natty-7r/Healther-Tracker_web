import axios from "axios";
// export const API_BASE_URL = "http://localhost:8081/";
export const API_BASE_URL = "https://health-tracker-api.onrender.com";

export const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
