import axios from 'axios'
export const baseURL = 'http://39.108.188.9:3000'

axios.defaults.baseURL = baseURL

// 响应拦截
axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    console.log(err, '网络错误')
  }
)
