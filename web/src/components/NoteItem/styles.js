import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  padding-right: 1.6rem;
  border-radius: 1rem;

  background: ${({ theme, isNew }) => isNew? 'transparent': theme.COLORS.BACKGROUND_900};
  
  border: ${({ theme, isNew }) => isNew? `1px dashed ${theme.COLORS.BACKGROUND_700}` : 'none'};
  
  > button {
    background: none;
  }
  
  > input {
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

     width: 100%;
    height: 5.6rem;
    border: none;
    padding: 1.2rem;

    &&placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }
`
