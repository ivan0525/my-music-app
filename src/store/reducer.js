import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../application/Recommend/store'
export default combineReducers({
  // 之后开发具体功能模块的时候添加reducer
  // 这里合并的数据的key值,在合并state到props上回用到
  recommend: recommendReducer
})
