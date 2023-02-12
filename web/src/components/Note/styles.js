import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  margin-bottom: 1.6rem;
  padding: 2.2rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`
