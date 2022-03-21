import axios from "axios";

const api = axios.create({
  baseURL: "https://mongo-redux.herokuapp.com/",
});

export default api;
