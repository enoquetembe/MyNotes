import styled from "styled-components"
import BackgroundImage from "../../assets/Notes.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`
export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 1000px) {
    margin-top: 1rem;
    padding: 0 10.5rem;
    width: 100%;
  }

  @media (max-width: 500px) {
    margin-top: 1rem;
    padding: 0 5rem;
    width: 100%;
  }

  @media (max-width: 300px) {
    margin-top: 1rem;
    padding: 0 3rem;
  }

  @media (max-width: 373px) {
    margin-top: 1rem;
    padding: 0 1rem;
    width: 100%;
  }
`
export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;

  
  @media (max-width: 1000px) {
    display: none;
  }
`
