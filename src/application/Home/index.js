import React from 'react'
import { renderRoutes } from 'react-router-config' //renderRoutes读取路由配置转化为Route标签
import { Top } from './style'
function Home(props) {
  const { route } = props
  return (
    <div>
      <Top>
        <span className='title'>音乐馆</span>
        <div className='search-pane'>
          <span className='iconfont search'>&#xe62b;</span>搜索
        </div>
        <span className='iconfont menu'>&#xe65c;</span>
      </Top>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default React.memo(Home)
