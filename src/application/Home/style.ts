import styled from 'styled-components'
import style from '../../assets/global-style'

// Home头部样式
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style['theme-color']};
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`
// tab栏样式
export const Tab = styled.div`
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  background: ${style['theme-color']};
  a {
    position: relative;
    padding: 0 10px;
    -webkit-tap-highlight-color: transparent;
    color: #f1f1f1;
    &.selected::before {
      content: '';
      position: absolute;
      bottom: 5px;
      width: calc(100% - 20px);
      height: 2px;
      background-color: #f1f1f1;
    }
  }
`
