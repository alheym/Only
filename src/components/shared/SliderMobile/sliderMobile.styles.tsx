import styled from 'styled-components'

import { SlideItem, Year, Description } from '@components/shared/SliderDesktop/sliderDesktop.styles'

export const Wrapper = styled.div`
  margin-top: 288px;

  .swiper {
    margin-bottom: 70px;
  }

  .swiper-slide {
    min-width: 166px;
  }

  .swiper-slide-next {
    opacity: 0.4;
  }
`

export const SlideItemMobile = styled(SlideItem)``

export const YearMobile = styled(Year)`
  font-size: 16px;
`

export const DescriptionMobile = styled(Description)`
  max-height: 80px;
  font-size: 14px;
  line-height: 145%;
`
