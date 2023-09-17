import { FC } from 'react'

import { Container, Wrapper, VerticalLine, HorizontalLine, Title } from './main.styles'
import { Dial, Slider, Years } from '@components/index'

export const MainPage: FC = () => {
  return (
    <Container>
      <Title>Исторические даты</Title>
      <Wrapper>
        <Dial />
        <Years />
        <Slider />
      </Wrapper>
      <VerticalLine />
      <HorizontalLine />
    </Container>
  )
}
