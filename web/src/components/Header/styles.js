import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 10.5;
  padding: 0 8rem;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  grid-area: header;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Logout = styled.button`
  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.6rem;
  }
`
