import styled from 'styled-components'

const QuizBackground = styled.div`
  width: 100%;
  height: auto;
  background-size: contain;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.background};
  background-position-y: 0.8rem;
  background-position-x: 30rem;
  background-attachment: fixed;
  background-repeat: no-repeat;
  flex: 1;
  @media screen and (max-width: 1305px) {
    background-position-x: 400px;
    background-position-y: 155px;
    background-size: 60ex 60ex;
  }
  @media screen and (max-width: 878px) {
    background-position-x: 380px;
    background-position-y: 155px;
    background-size: 50ex 50ex;
  }
  @media screen and (max-width: 778px) {
    background-position-x: -15vh;
    background-position-y: -25vw;
    background-size: 80ex 80ex;
  }
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`

export default QuizBackground