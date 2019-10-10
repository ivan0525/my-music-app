// import { combineReducers } from 'redux-immutable'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  bannerList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', action.data)
    default:
  }
}

// export default combineReducers({
//   // 之后开发具体功能模块的时候添加reducer
// })
