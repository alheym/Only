import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  height: 100vh;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(66, 86, 122, 0.1);
  border-left: 1px solid rgba(66, 86, 122, 0.1);
`

export const Title = styled.h1`
  position: absolute;
  top: 170px;
  left: 78px;
  width: 353px;
  font-family: 'PTSansBold', sans-serif;
  font-size: 56px;
  color: #42567a;
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
`

export const VerticalLine = styled.div`
  position: absolute;
  z-index: -4;
  top: 0;
  left: 50%;
  opacity: 0.1;
  height: 100%;
  width: 1px;
  background: #42567a;
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
`
