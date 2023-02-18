import { FormEvent, InvalidEvent } from 'react'

import { HeaderContainer, Container, NewTaskForm } from './styles'

import { PlusCircle } from 'phosphor-react'

import logoTodoList from '../../assets/logo-ignite-todo.svg'

interface HeaderProps {
  createNewTask: (event: FormEvent) => void
  newTask: string
  setNewTask: (newTask: string) => void
}

export function Header({ createNewTask, newTask, setNewTask }: HeaderProps) {
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewTaskEmpty = newTask.length === 0
  return (
    <HeaderContainer>
      <Container>
        <a href="">
          <img src={logoTodoList} alt="Logo Ignite" />
        </a>
        <NewTaskForm onSubmit={createNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            <span>Criar</span>
            <PlusCircle />
          </button>
        </NewTaskForm>
      </Container>
    </HeaderContainer>
  )
}
