import { useContext } from 'react'

import { DataContext } from '@context/dataContext'
import { circleDiameter } from '@constants/constants'

import { Category } from '@components/index'
import { Dot, Circle, DotNumber, Wrapper } from './dial.styles'

export const Dial = () => {
  const context = useContext(DataContext)

  if (!context) {
    return null
  }

  const { data, slide, setSlide } = context

  const handleClickPoint = (value: number) => {
    setSlide(value || 1)
  }

  const calculateAngle = (index: number, totalPoints: number) => {
    const angle = 360 - (index / totalPoints) * 360
    return angle
  }

  const calculatePointCoordinates = (angle: number, radius: number) => {
    const x = radius * Math.cos((angle * Math.PI) / 180)
    const y = radius * Math.sin((angle * Math.PI) / 180)
    return { x, y }
  }

  const circleRadius = circleDiameter / 2
  const pointOffset = circleRadius - 4 // contour thickness
  const rotation = slide ? slide : 1

  return (
    <Wrapper>
      <Circle rotation={rotation}>
        {data.map((item, index) => {
          const angle = calculateAngle(index, data.length)
          const { x, y } = calculatePointCoordinates(angle, circleRadius)

          return (
            <Dot
              key={`dot:${item.id}`}
              id={`dot${item.id}`}
              style={{ top: `${pointOffset - y}px`, left: `${pointOffset + x}px` }}
              rotation={-rotation}
              className={item.id === slide ? 'show' : ''}
              onClick={() => handleClickPoint(item.id)}>
              <DotNumber>{item.id}</DotNumber>
            </Dot>
          )
        })}
      </Circle>
      <Category slide={slide} />
    </Wrapper>
  )
}
