import axios from 'axios';
import {Platform} from 'react-native';
import {API_CONFIG} from '../constants/config';

const BASE_URL = Platform.select({
  android: API_CONFIG.ANDROID_BASE_URL,
  ios: API_CONFIG.IOS_BASE_URL,
});

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  config => {
    // Attach auth token here once implemented
    // const token = await getToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.warn(
        `API Error [${error.response.status}]:`,
        error.response.data,
      );
    } else if (error.request) {
      console.warn('Network Error:', error.message);
    }
    return Promise.reject(error);
  },
);
