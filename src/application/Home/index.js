import React from 'react'
import { renderRoutes } from 'react-router-config' //renderRoutes读取路由配置转化为Route标签
function Home(props) {
  const { route } = props
  return (
    <div>
      <div>Home</div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default React.memo(Home)
