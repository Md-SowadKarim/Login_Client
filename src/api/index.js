import axios from 'axios'

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5001/',
  withCredentials: true,
})


export default axiosSecure
