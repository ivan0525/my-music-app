import styled from 'styled-components'
import style from '../../assets/global-style'
export const ListComtainer = styled.div`
  h3 {
    font-size: 14px;
    font-weight: 700;
    margin: 10px 5px;
  }
`
export const ListItem = styled.div`
  position: relative;
  width: 32%;
  .img-wrapper {
    border-radius: 3px;
    .decorate {
      position: absolute;
      width: 100%;
      height: 35px;
      background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla(0, 0%, 100%, 0));
      border-radius: 3px;
    }
    img {
      border-radius: 3px;
    }
    .play-count {
      display: flex;
      position: absolute;
      top: 2px;
      right: 2px;
      text-align: left;
      font-size: ${style['font-size-s']};
      line-height: 1.4;
      color: ${style['font-color-desc']};
    }
  }
  .desc {
    height: 50px;
    font-size: 12px;
    line-height: 1.4;
    color: #666;
    padding: 0 2px;
  }
`

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`
