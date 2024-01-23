import axios from 'axios'

const axiosSecure = axios.create({
  baseURL: 'https://login-9yaxp17kj-md-sowadkarim.vercel.app',
  withCredentials: true,
})


export default axiosSecure
