import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.duskyBlue};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  height: 2rem;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.8s background-color;
  cursor: pointer;
  &:hover {
    opacity: .5;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.slateBlue};
    cursor: not-allowed;
  }
`

export default Button