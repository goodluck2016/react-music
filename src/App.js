import React from 'react';
import { GlobalStyle } from  './style';
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';

function App () {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { renderRoutes (routes) }
    </HashRouter>
  )
}

export default App;
