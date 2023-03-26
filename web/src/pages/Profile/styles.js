import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    padding: 0 12.4rem;
    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    button {
      @media(max-width: 900px) {
        margin-top: -10rem;
        margin-left: -10rem;
      }
    }


    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  width: 18.6rem;
  height: 18.6rem;
  margin: -12.4rem auto 3.2rem;

  position: relative;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    background: ${({ theme }) => theme.COLORS.ORANGE};

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

  > input {
    display: none;
  }
`
