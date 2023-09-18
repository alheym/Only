import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 32px;
  left: 117px;
  width: 86px;
  gap: 10px;
`

export const PaginationItem = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--pagination);
  &.active {
    background: var(--text);
  }
`
