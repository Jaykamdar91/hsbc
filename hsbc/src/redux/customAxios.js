import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://51.143.217.12:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

customAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default customAxios;
