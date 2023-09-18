import styled from 'styled-components'

import { ContpolsProps } from './controls.types'

import buttonActive from '@assets/icons/buttonActive.svg'
import buttonDisabled from '@assets/icons/buttonDisabled.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 56px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 13px;
    gap: 10px;
    margin-bottom: 0;
    line-height: normal;
  }
`
export const ControlsButton = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`
export const ButtonPrev = styled.button<ContpolsProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: var(--bg);
  background-image: url(${props => (props.active === 'true' ? buttonDisabled : buttonActive)});

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    background-size: contain;
  }
`
export const ButtonNext = styled(ButtonPrev)`
  transform: scaleX(-1);
`
