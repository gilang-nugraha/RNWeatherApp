import axios from 'axios';
import {API_URL, API_KEY} from '@env';

export const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
  params: {
    appid: API_KEY,
  },
});

axiosInstance.interceptors.request.use(
  request => {
    const url = new URL(request.url || '', request.baseURL || '');
    const params = new URLSearchParams(request.params).toString();
    console.log(`Request URL: ${url}?${params}`);
    return request;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);
