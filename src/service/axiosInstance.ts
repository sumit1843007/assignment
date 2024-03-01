import axios from 'axios';

const BASE_URL = 'https://wordsapi-nkj3.onrender.com';

const axiosInstance = axios.create({
 baseURL: BASE_URL,
 withCredentials: true,

});

axiosInstance.interceptors.request.use(
 (config) => {
  const token = 'yourBearerToken';
  config.headers.Authorization = `Bearer ${token}`;
  return config;
 },
 (error) => {
  return Promise.reject(error);
 }
);

export default axiosInstance;
