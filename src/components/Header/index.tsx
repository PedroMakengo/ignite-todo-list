import { HeaderContainer, Container, NewTask } from './styles'

import { PlusCircle } from 'phosphor-react'

import logoTodoList from '../../assets/logo-ignite-todo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <a href="">
          <img src={logoTodoList} alt="Logo Ignite" />
        </a>
        <NewTask>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar
            <PlusCircle />
          </button>
        </NewTask>
      </Container>
    </HeaderContainer>
  )
}
