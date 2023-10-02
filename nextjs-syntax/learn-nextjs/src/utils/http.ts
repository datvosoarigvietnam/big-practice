import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    ;(this.instance = axios.create({
      baseURL: 'https://63f57b5a3f99f5855dc218a1.mockapi.io/',
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
      },
    })),
      this.instance.interceptors.response.use((response) => {
        return response
      })
  }
}

const http = new Http().instance
export default http
