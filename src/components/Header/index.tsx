import { HeaderContainer, Container, FormTodo } from './styles'

import { PlusCircle } from 'phosphor-react'

import logoTodoList from '../../assets/logo-ignite-todo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <a href="">
          <img src={logoTodoList} alt="Logo Ignite" />
        </a>
        <FormTodo>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar
            <PlusCircle />
          </button>
        </FormTodo>
      </Container>
    </HeaderContainer>
  )
}
