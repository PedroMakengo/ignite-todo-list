import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 12.5rem;
  background: ${(props) => props.theme['gray-700']};
`

export const Container = styled.div`
  width: 736px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  a {
    height: 40%;
    display: flex;
    align-items: flex-end;
  }
`

export const FormTodo = styled.form`
  width: 100%;
  transform: translateY(3.5rem);

  display: flex;

  gap: 0.5rem;

  input {
    height: 54px;
    padding: 1rem;
    flex: 1;

    background: ${(props) => props.theme['gray-500']};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['gray-700']};

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
      font-size: 1rem;
      line-height: 140;
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};

      color: ${(props) => props.theme['white']};
    }
  }

  button {
    padding: 1rem;
    height: 52px;

    border-radius: 8px;
    background: ${(props) => props.theme['blue-dark']};
    border: 0;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    color: ${(props) => props.theme['white']};

    font-weight: 700;

    svg {
      width: 16px;
      height: 16px;
    }

    transition: background, all 0.2s;
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme['blue']};
    }
  }
`
