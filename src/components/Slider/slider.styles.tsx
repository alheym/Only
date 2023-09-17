import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 1;
  padding: 0 80px;

  .swiper-button-disabled {
    display: none;
  }
  .swiper {
    overflow: visible;
    width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    margin-top: 0;
    height: 100%;
    width: 80px;
    background: #f4f5f9;
    top: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    position: absolute;
    top: 43px;
    padding: 13px 16.5px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 50%;
    background: #fff;
    filter: drop-shadow(0px 0px 15px rgba(56, 119, 238, 0.1));
  }

  .swiper-button-prev::after {
    left: 20px;
  }
  .swiper-button-next::after {
    right: 40px;
  }

  .swiper-button-prev {
    left: -80px;
  }

  .swiper-button-next {
    width: 120px;
    right: -80px;
  }
`

export const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`
export const Year = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 25px;
  line-height: 120%; /* 30px */
  text-transform: uppercase;
  color: #3877ee;
`
export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px; /* 150% */
  color: #42567a;
`
