import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // ajusta si el backend está en otro host
});

export default API;
