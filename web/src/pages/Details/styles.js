import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
    'header'
    'content'; 

    > main {
      grid-area: content;
      padding: 6.4rem 0;
      overflow-y: auto;
    }
`

export const Links = styled.ul`
  list-style: none;
  
  > li {
    margin-top: 1.2rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`

export const Content = styled.div`
  max-width: 55rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  
  > button:first-child {
    align-self: end;
  }

  > h1 {
    margin-top: 6.4rem;

    font-size: 3.6rem;
    font-weight: 500;
  }

  > p {
    margin-top: 1.6rem;

    font-size: 1.6rem;
    text-align: justify;
  }
`