import React from 'react'
import { Redirect } from 'react-router-dom'
// 主页
import Home from '../application/Home'
// 排行榜
import Rank from '../application/Rank'
// 推荐页
import Recommend from '../application/Recommend'
// 歌手
import Singer from '../application/Singer'

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommend'} />
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/rank',
        component: Rank
      },
      {
        path: '/singer',
        component: Singer
      }
    ]
  }
]
