import { getAccessTokenFromLS } from '@/hooks/useAuth';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      // baseURL: 'http://localhost:8080/',
      baseURL: 'https://big-practice-server.vercel.app/',
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer'
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (typeof window !== 'undefined') {
          const accessToken = localStorage.getItem('access_token');
          if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // You can modify the response data here if needed
        return response;
      },
      (error: AxiosError) => {
        // Handle error responses here
        if (error.response) {
          // The request was made, and the server responded with a status code that falls out of the range of 2xx
          console.error('Response Error Data:', error.response.data);
          console.error('Response Error Status:', error.response.status);
          console.error('Response Error Headers:', error.response.headers);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error('Request Error:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error Message:', error.message);
        }
        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;
export default http;
