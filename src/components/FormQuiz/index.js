import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

Form.Input = styled.input`
  width: 100%;
  height: 2rem;
  outline: none;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.dark};
  color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 4px;
  text-align: start;
  padding: 1rem;
  font-weight: 500;
  & :hover {
    transition: 0.3s border;
    border: 1px solid ${({ theme }) => theme.colors.duskyBlue};
  }
`
Form.Button = styled.button`
  width: 100%;
  height: 2rem;
  outline: none;
  box-sizing: border-box;
  background-color:${({ disalbledButton, theme }) => !disalbledButton ? theme.colors.slateBlue : '#1d384a'};
  color: #fff;
  border: none;
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
  cursor: ${({ disalbledButton }) => !disalbledButton ? 'pointer' : 'no-drop'};
  font-weight: 700;
`
export default Form