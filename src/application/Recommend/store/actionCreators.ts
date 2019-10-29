// 存放不同action的地方
import { fromJS } from 'immutable'
import { Dispatch } from 'redux'
import API from '../../../api/request'
import actionTypes from './actionTypes'

// 更新轮播列表
export const changeBannerList = (data: any) => {
  return {
    data: fromJS(data),
    type: actionTypes.CHANGE_BANNER
  }
}

// 更新推荐列表
export const changeRecommentList = (data: any) => {
  return {
    data: fromJS(data),
    type: actionTypes.CHANGE_RECOMMEND_LIST
  }
}

// 获取轮播列表
export const getBannerList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data: any = await API.getBannerRequest()
      dispatch(changeBannerList(data.banners))
    } catch (err) {
      console.log(err)
    }
  }
}

// 获取推荐列表
export const getRecommendList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data: any = await API.getRecommendListRequest()
      dispatch(changeRecommentList(data.result))
    } catch (err) {
      console.log(err)
    }
  }
}
