// 存放initialState和reducer函数
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

// 初始的state
const initialState = fromJS({
  bannerList: [],
  recommendList: []
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', action.data)
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', action.data)
    default:
      return state
  }
}
