import axios from "axios";

export const urlimage = "http://localhost:3001/public/";

axios.defaults.baseURL = 'http://localhost:3001/api/';


axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

//Response interceptor

axios.interceptors.response.use(
  (response) => {
    return response
  },

  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  });

export default axios;
