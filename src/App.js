import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { renderRoutes } from 'react-router-config' //renderRoutes读取路由配置转化为Route标签
import store from './store'
import routes from './routers'
import { HashRouter } from 'react-router-dom'
function App() {
  console.log(routes)
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  )
}

export default App
