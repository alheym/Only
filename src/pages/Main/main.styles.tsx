import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  min-height: 1080px;

  @media (max-width: 768px) {
    max-width: 320px;
    min-height: 568px;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 1080px;
  border-right: 1px solid rgba(66, 86, 122, 0.1);
  border-left: 1px solid rgba(66, 86, 122, 0.1);

  @media (max-width: 768px) {
    border: none;
    min-height: 568px;
  }
`

export const Title = styled.h1`
  position: absolute;
  top: 170px;
  left: 78px;
  width: 353px;
  font-family: 'PTSansBold', sans-serif;
  font-size: 56px;
  color: var(--text);
  line-height: 120%;
  &:before {
    content: '';
    position: absolute;
    top: 8px;
    left: -78px;
    width: 5px;
    height: 120px;
    background: linear-gradient(#3877ee 0%, #3877ee 30%, #ef5da8 70%, #ef5da8 100%);
  }

  @media (max-width: 768px) {
    top: 59px;
    left: 20px;
    width: 123px;
    font-size: 20px;
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
  min-height: 1080px;
  width: 1px;
  background: #42567a;

  @media (max-width: 768px) {
    display: none;
  }
`
export const HorizontalLine = styled.div`
  position: absolute;
  z-index: -4;
  top: 480px;
  left: 0;
  opacity: 0.1;
  height: 1px;
  width: 100%;
  background: #42567a;

  @media (max-width: 768px) {
    top: 293px;
    left: 20px;
    width: 280px;
  }
`
