import React, { useEffect, useState } from 'react'
import { SliderContainer } from './style'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { bannerList } = props
  return (
    <SliderContainer>
      <div></div>
    </SliderContainer>
  )
}

export default Slider
