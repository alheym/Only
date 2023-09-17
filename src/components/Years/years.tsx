import { FC, useContext, useRef, useEffect, useState } from 'react'
import CountUp from 'react-countup'

import { DataContext } from '@context/dataContext'

import { Year, Wrapper } from './years.styles'

export const Years: FC = () => {
  const context = useContext(DataContext)
  const [year, setYear] = useState<number[]>([1980, 1986])

  if (!context) {
    return null
  }

  const { slide, data } = context

  const years = data?.find(item => item.id === slide)?.years || []

  useEffect(() => {
    setTimeout(() => setYear([years[0], years[1]]), 500)
  }, [data])

  return (
    <Wrapper>
      <Year color={'var(--iris)'}>
        <CountUp start={year[0]} end={data ? years[0] : year[0]} duration={0.8} separator="" />
      </Year>
      <Year color={'var(--fuschia)'}>
        <CountUp start={year[1]} end={data ? years[1] : year[1]} duration={1} separator="" />
      </Year>
    </Wrapper>
  )
}
