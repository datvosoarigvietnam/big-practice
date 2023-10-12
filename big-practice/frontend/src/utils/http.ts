import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios';

class Http {
  instance: AxiosInstance;
  constructor() {
    (this.instance = axios.create({
      baseURL: 'http://localhost:8080/',
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer'
      },
    })),
      this.instance.interceptors.response.use((response) => {
        return response;
      });
  }
}

const http = new Http().instance;
export default http;
