import React from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config' // renderRoutes读取路由配置转化为Route标签
import { Top, Tab } from './style'
export interface Props {
  [key: string]: any
}
function Home(props: Props) {
  const { route } = props
  return (
    <>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          推荐
        </NavLink>
        <NavLink to="/singer" activeClassName="selected">
          歌手
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          排行榜
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </>
  )
}

export default React.memo(Home)
