import { FC, useContext, useState, useEffect } from 'react'

import { DataContext } from '@context/dataContext'

import { Wrapper, ButtonPrev, ButtonNext, ControlsButton } from './controls.styles'

export const Controls: FC = () => {
  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const [isLastSlide, setIsLastSlide] = useState(false)

  const context = useContext(DataContext)

  if (!context) {
    return null
  }

  const { slide, data, setSlide } = context

  useEffect(() => {
    setIsFirstSlide(slide === 1)
    setIsLastSlide(slide === data.length)
  }, [slide])

  const prevSlide = () => {
    if (slide !== null) {
      setSlide(Math.max(1, slide - 1))
    }
  }

  const nextSlide = () => {
    if (slide !== null) {
      setSlide(Math.min(6, slide + 1))
    }
  }

  return (
    <Wrapper>
      {`0${slide}/0${data.length}`}
      <ControlsButton>
        <ButtonPrev active={isFirstSlide} onClick={prevSlide} />
        <ButtonNext active={isLastSlide} onClick={nextSlide} />
      </ControlsButton>
    </Wrapper>
  )
}
