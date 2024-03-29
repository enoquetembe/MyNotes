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
    overflow-y: auto;

    @media(max-width: 650px) {
      margin-inline: 4rem;
    }
  }
  
  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
` 

export const Form = styled.form`
  max-width: 55rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.6rem;

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2rem;
    }
  }
`
