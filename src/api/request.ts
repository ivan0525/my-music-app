import request from 'axios'
export interface IResponse<T> {
  result?: T
  banners?: T
}
// 获取轮播列表
export const getBannerRequest = () => {
  return request({
    url: '/banner',
    method: 'GET'
  })
}

// 获取推荐列表
export const getRecommendListRequest = () => {
  return request({
    url: '/personalized',
    method: 'GET'
  })
}
