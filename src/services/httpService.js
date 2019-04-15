import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

import { apiUrl } from "../config.json"; // Can change between apiUrl and apiUrlLocal

axios.defaults.baseURL = apiUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("Something failed while deleting a post!");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

function setToken(token) {
  axios.defaults.headers.common["Authorization"] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
  setToken
};
