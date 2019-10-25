import { axiosInstance } from './config'

// 获取轮播列表
export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

// 获取推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized')
}
