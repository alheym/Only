import { FC, useContext, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { DataContext } from '@context/dataContext'
import { DataItem } from '@mocks/db'

import { TitleProps } from './title.types'
import { TitleCategory } from './title.styles'

export const Title: FC<TitleProps> = () => {
  const context = useContext(DataContext)
  const ref = useRef(null)

  if (!context) {
    return null
  }
  const { slide, data } = context
  const category = data.find((item: DataItem) => item.id === slide)?.category || []

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

  return <TitleCategory ref={ref}>{category}</TitleCategory>
}
