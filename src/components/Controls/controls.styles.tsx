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
`
export const ControlsButton = styled.div`
  display: flex;
  gap: 20px;
`
export const ButtonPrev = styled.button<ContpolsProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: var(--bg);
  background-image: url(${props => (props.active ? buttonDisabled : buttonActive)});
`
export const ButtonNext = styled(ButtonPrev)`
  transform: scaleX(-1);
`
