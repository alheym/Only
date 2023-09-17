import styled from 'styled-components'

import { YearProps } from './years.types'

export const Year = styled.span<YearProps>`
  color: ${({ color }) => color};
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -4px;
  text-align: center;
`
export const Wrapper = styled.div`
  z-index: -3;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 956px;
  top: -135px;
  margin: 0 auto;
`
