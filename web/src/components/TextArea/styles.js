import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  border: none;
  resize: none;
  margin-bottom: 0.8rem;
  padding: 1.6rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};


`
