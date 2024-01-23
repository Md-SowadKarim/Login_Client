import axios from 'axios'

const axiosSecure = axios.create({
  baseURL: 'https://server-flax-three.vercel.app',
  withCredentials: true,
})


export default axiosSecure
