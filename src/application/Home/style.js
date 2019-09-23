import styled from 'styled-components'
import style from '../../assets/global-style'

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 5px 15px;
  background: ${style['theme-color']};
  & > span {
    line-height: 30px;
    color: #767676;
    &.title {
      font-size: 22px;
      font-weight: 700;
      color: #000;
    }
    &.menu {
      font-size: 22px;
      color: #7d7d7d;
    }
  }
  & > .search-pane {
    width: 60%;
    text-align: center;
    line-height: 30px;
    background: #fff;
    border-radius: 15px;
    color: #767676;
    .search {
      margin-right: 2px;
      font-weight: 700;
      color: #b3b3b3;
    }
  }
`
