import styled from 'styled-components'
import { DotProps, RotationProps } from './dial.types'

import { circleDiameter } from '@constants/constants'

export const Circle = styled.div<RotationProps>`
  z-index: 5;
  position: relative;
  margin: 0 auto;
  top: 215px;
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
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text);
  overflow: hidden;
  cursor: pointer;
  transform: rotate(${({ rotation }) => -rotation * 60}deg);
  font-size: 20px;

  transition: all 0.4s;

  span {
    visibility: hidden;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
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
    width: 56px;
    height: 56px;
    background: #f4f5f9;
    border: 1px solid rgba(48, 62, 88, 0.5);

    margin: -26px;
  }
`
export const DotNumber = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
`
