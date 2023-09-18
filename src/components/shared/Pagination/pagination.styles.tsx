import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 2rem;
  left: 7.3125rem;
  width: 5.375rem;
  gap: 0.625rem;
`

export const PaginationItem = styled.div`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: var(--pagination);
  &.active {
    background: var(--text);
  }
`
