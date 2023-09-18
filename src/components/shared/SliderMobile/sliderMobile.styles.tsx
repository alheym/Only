import styled from 'styled-components'

import { SlideItem, Year, Description } from '@components/shared/SliderDesktop/sliderDesktop.styles'

export const Wrapper = styled.div`
  margin-top: 18rem;

  .swiper {
    margin-bottom: 4.375rem;
  }

  .swiper-slide {
    min-width: 10.375rem;
  }

  .swiper-slide-next {
    opacity: 0.4;
  }
`

export const SlideItemMobile = styled(SlideItem)``

export const YearMobile = styled(Year)`
  font-size: 1rem;
`

export const DescriptionMobile = styled(Description)`
  max-height: 5rem;
  font-size: 0.875rem;
  line-height: 145%;
`
