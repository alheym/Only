import styled from 'styled-components'

import { YearProps } from './years.types'

export const Year = styled.span<YearProps>`
  color: ${({ color }) => color};
  font-size: 12.5rem;
  font-weight: 700;
  line-height: 10rem;
  letter-spacing: -0.25rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    line-height: normal;
    letter-spacing: -0.07rem;
  }
`
export const Wrapper = styled.div`
  z-index: -3;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 59.75rem;
  top: -8.4375rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    top: 10.3125rem;
    width: 17.0625rem;
  }
`
