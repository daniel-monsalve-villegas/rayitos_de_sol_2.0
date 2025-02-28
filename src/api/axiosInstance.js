import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1", // Base de la API
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: "usuario",
    password: "12345",
  },
});

export default api;