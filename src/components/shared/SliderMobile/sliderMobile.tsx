import { FC, useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { DataContext } from '@context/dataContext'
import { Controls, Category, PaginstionMobile } from '@components/index'

import { Wrapper, SlideItemMobile, YearMobile, DescriptionMobile } from './sliderMobile.styles'

export const SliderMobile: FC = () => {
  const context = useContext(DataContext)
  const ref = useRef(null)

  if (!context) {
    return null
  }

  const { slide, data } = context

  const details = data.find(item => item.id === slide)?.details || []

  useEffect(() => {
    const animation = gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.inOut',
      }
    )

    animation.kill()
    animation.restart()

    animation.play()
  }, [slide])

  return (
    <Wrapper>
      <Category slide={slide} />
      <div ref={ref}>
        <Swiper key={slide} slidesPerView={1.5} spaceBetween={25}>
          {details.map(item => (
            <SwiperSlide key={item.year}>
              <SlideItemMobile>
                <YearMobile>{item.year}</YearMobile>
                <DescriptionMobile>{item.description}</DescriptionMobile>
              </SlideItemMobile>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <PaginstionMobile />
      <Controls />
    </Wrapper>
  )
}
