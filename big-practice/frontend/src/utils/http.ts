import { getAccessTokenFromLS } from '@/hooks/useAuth';
import axios, { AxiosInstance } from 'axios';

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
    this.instance.interceptors.response.use((response) => {
      return response;
    });
  }
}

const http = new Http().instance;
export default http;
