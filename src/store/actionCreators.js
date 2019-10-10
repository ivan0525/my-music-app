import { fromJS } from 'immutable'
import { getBannerRequest } from '../api/request'
import * as actionTypes from './actionTypes'

// 更新轮播列表
export const changeBannerList = (data) => {
  return {
    data: fromJS(data),
    type: actionTypes.CHANGE_BANNER
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
