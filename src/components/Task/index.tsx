import {
  Container,
  TaskInfo,
  EmptyTask,
  TaskCreated,
  Counter,
  TaskDone,
  ListTask,
  ItemTask,
} from './styles'

import { ClipboardText, Trash, Circle } from 'phosphor-react'

export function Task() {
  return (
    <Container>
      <TaskInfo>
        <TaskCreated>
          <strong>Total criadas</strong>
          <Counter>0</Counter>
        </TaskCreated>
        <TaskDone>
          <strong>Concluídas</strong>
          <Counter>0</Counter>
        </TaskDone>
      </TaskInfo>
      {/* 
      <EmptyTask>
        <ClipboardText size={56} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </EmptyTask> */}

      <ListTask>
        <ItemTask>
          <button title="Checar o botão">
            <Circle size={24} weight="bold" color="#4eabde" />
          </button>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <button title="Deletar task">
            <Trash size={24} color="#808080" />
          </button>
        </ItemTask>
        <ItemTask>
          <button title="Checar o botão">
            <Circle size={24} weight="bold" color="#4eabde" />
          </button>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <button title="Deletar task">
            <Trash size={24} color="#808080" />
          </button>
        </ItemTask>
        <ItemTask>
          <button title="Checar o botão">
            <Circle size={24} weight="bold" color="#4eabde" />
          </button>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <button title="Deletar task">
            <Trash size={24} color="#808080" />
          </button>
        </ItemTask>
      </ListTask>
    </Container>
  )
}
