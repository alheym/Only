import { FC, useContext } from 'react'

import { DataContext } from '@context/dataContext'

import { Wrapper, PaginationItem } from './pagination.styles'

export const PaginstionMobile: FC = () => {
  const context = useContext(DataContext)
  if (!context) {
    return null
  }

  const { slide, data, setSlide } = context

  return (
    <Wrapper>
      {data.map((item, index) => (
        <PaginationItem key={`dot-${index}`} onClick={() => setSlide(item.id)} className={item.id === slide ? 'active' : ''} />
      ))}
    </Wrapper>
  )
}
