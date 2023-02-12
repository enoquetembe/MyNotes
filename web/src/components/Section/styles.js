import styled from 'styled-components'

export const Container = styled.section`
  margin: 5rem 0 2.8rem;
  
  > h2 {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 2rem;
    font-weight: 400;
    
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;  
  }
`
