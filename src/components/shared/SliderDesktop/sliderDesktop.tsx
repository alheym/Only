import { FC, useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { DataContext } from '@context/dataContext'
import { Controls } from '@components/index'

import { SlideItem, Year, Description } from './sliderDesktop.styles'

export const SliderDesktop: FC = () => {
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
      },
      {
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
      }
    )

    animation.kill()
    animation.restart()

    animation.play()
  }, [slide])

  return (
    <>
      <Controls />
      <div ref={ref}>
        <Swiper key={slide} navigation slidesPerView={3} spaceBetween={80} modules={[Navigation]} grabCursor={true}>
          {details.map(item => (
            <SwiperSlide key={item.year}>
              <SlideItem>
                <Year>{item.year}</Year>
                <Description>{item.description}</Description>
              </SlideItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
