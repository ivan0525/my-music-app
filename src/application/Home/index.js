import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config' //renderRoutes读取路由配置转化为Route标签
import { Top, Tab } from './style'
function Home(props) {
  const { route } = props
  return (
    <Fragment>
      <Top>
        <span className='iconfont menu'>&#xe65c;</span>
        <span className='title'>WebApp</span>
        <span className='iconfont search'>&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to='/recommend' activeClassName='selected'>
          推荐
        </NavLink>
        <NavLink to='/singer' activeClassName='selected'>
          歌手
        </NavLink>
        <NavLink to='/rank' activeClassName='selected'>
          排行榜
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </Fragment>
  )
}

export default React.memo(Home)
