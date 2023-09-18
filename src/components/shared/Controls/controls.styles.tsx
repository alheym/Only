import styled from 'styled-components'

import { ContpolsProps } from './controls.types'

import buttonActive from '@assets/icons/buttonActive.svg'
import buttonDisabled from '@assets/icons/buttonDisabled.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 3.5rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0.8125rem;
    gap: 0.625rem;
    margin-bottom: 0;
    line-height: normal;
  }
`
export const ControlsButton = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`
export const ButtonPrev = styled.button<ContpolsProps>`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: var(--bg);
  background-image: url(${props => (props.active === 'true' ? buttonDisabled : buttonActive)});

  @media (max-width: 768px) {
    width: 1.5625rem;
    height: 1.5625rem;
    background-size: contain;
  }
`
export const ButtonNext = styled(ButtonPrev)`
  transform: scaleX(-1);
`
