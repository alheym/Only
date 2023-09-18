import { FC } from 'react'

import { SliderDesktop, SliderMobile } from '@components/index'
import { mediumScreen } from '@constants/constants'

import { Wrapper } from './slider.styles'

export const Slider: FC = () => {
  const isMobile = window.innerWidth < mediumScreen

  return <Wrapper>{isMobile ? <SliderMobile /> : <SliderDesktop />}</Wrapper>
}
