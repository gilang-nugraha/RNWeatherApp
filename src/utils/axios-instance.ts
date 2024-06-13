import axios from 'axios';
import {API_URL, API_KEY} from '@env';
import {getLocation} from './utils';

export const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
  params: {
    appid: API_KEY,
  },
});

axiosInstance.interceptors.request.use(
  async request => {
    try {
      const location = await getLocation();
      if (location) {
        request.params = {
          ...request.params,
          lat: location.latitude,
          lon: location.longitude,
          units: 'metric',
        };
      }
    } catch (error) {
      console.error('Error getting location:', error);
    }

    // Log the request URL with parameters
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
