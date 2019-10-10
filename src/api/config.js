import axios from 'axios'
export const baseURL = 'http://39.108.188.9:3000'

// 创建axios实例
const axiosInstance = axios.create({
  baseURL
})

// 相应拦截
axiosInstance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    console.log(err, '网络错误')
  }
)

export { axiosInstance }
