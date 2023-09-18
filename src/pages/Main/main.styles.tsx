import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: 90rem;
  min-height: 67.5rem;

  @media (max-width: 768px) {
    max-width: 20rem;
    min-height: 35.5rem;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 67.5rem;
  border-right: 1px solid rgba(66, 86, 122, 0.1);
  border-left: 1px solid rgba(66, 86, 122, 0.1);

  @media (max-width: 768px) {
    border: none;
    min-height: 35.5rem;
  }
`

export const Title = styled.h1`
  position: absolute;
  top: 10.625rem;
  left: 4.875rem;
  width: 22.0625rem;
  font-family: 'PTSansBold', sans-serif;
  font-size: 3.5rem;
  color: var(--text);
  line-height: 120%;
  &:before {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: -4.875rem;
    width: 0.3125rem;
    height: 7.5rem;
    background: linear-gradient(#3877ee 0%, #3877ee 30%, #ef5da8 70%, #ef5da8 100%);
  }

  @media (max-width: 768px) {
    top: 3.6875rem;
    left: 1.25rem;
    width: 7.6875rem;
    font-size: 1.25rem;
    &:before {
      display: none;
    }
  }
`
export const VerticalLine = styled.div`
  position: absolute;
  z-index: -4;
  top: 0;
  left: 50%;
  opacity: 0.1;
  min-height: 67.5rem;
  width: 1px;
  background: var(--text);

  @media (max-width: 768px) {
    display: none;
  }
`
export const HorizontalLine = styled.div`
  position: absolute;
  z-index: -4;
  top: 30rem;
  left: 0;
  opacity: 0.1;
  height: 1px;
  width: 100%;
  background: var(--text);

  @media (max-width: 768px) {
    top: 18.3125rem;
    left: 1.25rem;
    width: 17.5rem;
  }
`
