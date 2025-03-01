import axios from "axios";
// export const API_BASE_URL = "localhost:8080";
export const API_BASE_URL = "http://localhost:8080/";

export const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
