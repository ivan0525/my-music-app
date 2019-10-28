import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Slider from '../../components/slider'
import RecommendList from '../../components/list'
import * as actionTypes from './store/actionCreators'
function Recommend(props) {
  const { bannerList, recommendList } = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props

  useEffect(() => {
    getBannerDataDispatch()
    getRecommendListDataDispatch()
    // eslint-disable-next-line
  }, [])
  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []
  return (
    <div>
      <Slider bannerList={bannerListJS}></Slider>
      <RecommendList recommendList={recommendListJS}></RecommendList>
    </div>
  )
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  // 不要再这里将数据toJS,不然每次diff比对props的时候都是不一样的引用，还是导致不必要的重渲染, 属于滥用immutable
  return {
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList'])
  }
}
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend))
