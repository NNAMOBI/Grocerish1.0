import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'http://127.0.0.1:4000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': ' http://localhost:3000',
  },
})
export default axiosConfig
