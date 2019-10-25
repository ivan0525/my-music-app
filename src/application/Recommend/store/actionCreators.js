// 存放不同action的地方
import { fromJS } from 'immutable'
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'
import * as actionTypes from './actionTypes'

// 更新轮播列表
export const changeBannerList = (data) => {
  return {
    data: fromJS(data),
    type: actionTypes.CHANGE_BANNER
  }
}

// 更新推荐列表
export const changeRecommentList = (data) => {
  return {
    data: fromJS(data),
    type: actionTypes.CHANGE_RECOMMEND_LIST
  }
}

// 获取轮播列表
export const getBannerList = () => {
  return async (dispatch) => {
    try {
      const data = await getBannerRequest()
      dispatch(changeBannerList(data.banners))
    } catch (err) {
      console.log(err)
    }
  }
}

// 获取推荐列表
export const getRecommendList = () => {
  return async (dispatch) => {
    try {
      const data = await getRecommendListRequest()
      dispatch(changeRecommentList(data.result))
    } catch (err) {
      console.log(err)
    }
  }
}
