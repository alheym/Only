import styled from 'styled-components'
import { DotProps, RotationProps } from './dial.types'

import { circleDiameter } from '@constants/constants'

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
export const Circle = styled.div<RotationProps>`
  z-index: 5;
  position: relative;
  margin: 0 auto;
  top: 13.4375rem;
  width: ${circleDiameter}px;
  height: ${circleDiameter}px;
  border: 1px solid rgba(66, 86, 122, 0.1);
  border-radius: 50%;
  transform: rotate(${({ rotation }) => -rotation * 60}deg);

  transition:
    transform linear 0.4s,
    opacity 0.3s;
`
export const Dot = styled.div<DotProps>`
  position: absolute;
  z-index: 15;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: var(--text);
  overflow: hidden;
  cursor: pointer;
  transform: rotate(${({ rotation }) => -rotation * 60}deg);
  font-size: 1.25rem;

  transition: all 0.4s;

  span {
    visibility: hidden;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
  }

  &:hover,
  &.show {
    span {
      visibility: visible;
    }
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    background: var(--bg);
    border: 1px solid rgba(48, 62, 88, 0.5);

    margin: -1.625rem;
  }
`
export const DotNumber = styled.span`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem; /* 150% */
`
