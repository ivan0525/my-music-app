import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { renderRoutes } from 'react-router-config' //renderRoutes读取路由配置转化为Route标签
import store from './store'
import routes from './routers'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}

export default App
