import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  }
);

export default api;
