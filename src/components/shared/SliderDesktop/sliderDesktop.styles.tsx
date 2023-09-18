import styled from 'styled-components'

export const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  width: 100%;
`
export const Year = styled.p`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5625rem;
  line-height: 120%; /* 30px */
  font-weight: 400;
  text-transform: uppercase;
  color: var(--year);
`
export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem; /* 150% */
  color: var(--text);
`
