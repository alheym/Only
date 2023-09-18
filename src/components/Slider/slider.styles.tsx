import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 1;
  padding: 0 5rem;

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
    width: 5rem;
    background: var(--bg);
    top: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    position: absolute;
    top: 2.6875rem;
    padding: 0.8125rem 1.0313rem;
    font-size: 0.875rem;
    font-weight: 700;
    border-radius: 50%;
    background: #fff;
    filter: drop-shadow(0 0 0.9375rem rgba(56, 119, 238, 0.1));
  }

  .swiper-button-prev::after {
    left: 1.25rem;
  }
  .swiper-button-next::after {
    right: 2.5rem;
  }

  .swiper-button-prev {
    left: -5rem;
  }

  .swiper-button-next {
    width: 7.5rem;
    right: -5rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`
