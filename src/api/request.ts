import request from 'axios'
export default {
  // 获取轮播列表
  getBannerRequest() {
    return request({
      url: '/banner',
      method: 'GET'
    })
  },
  // 获取推荐列表
  getRecommendListRequest() {
    return request({
      url: '/personalized',
      method: 'GET'
    })
  }
}
