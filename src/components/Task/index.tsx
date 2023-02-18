import {
  Container,
  TaskInfo,
  EmptyTask,
  TaskCreated,
  Counter,
  TaskDone,
  ListTask,
  ItemTask,
  LineTask,
  LineTaskCompleted,
} from './styles'

import { ClipboardText, Trash, Circle, CheckCircle } from 'phosphor-react'
import { Tasks } from '../../App'

interface TaskProps {
  tasks: Tasks[]
  onClickIsCompleted: (taskPositionAndArray: number) => void
  ondDeleteTask: (id: string) => void
}

export function Task({ tasks, ondDeleteTask, onClickIsCompleted }: TaskProps) {
  let countCompleted = 0
  for (let task of tasks) {
    if (task.isCompleted === true) {
      countCompleted++
    }
  }
  return (
    <Container>
      <TaskInfo>
        <TaskCreated>
          <strong>Total criadas</strong>
          <Counter>{tasks.length}</Counter>
        </TaskCreated>
        <TaskDone>
          <strong>Concluídas</strong>
          <Counter>
            {countCompleted} de {tasks.length}
          </Counter>
        </TaskDone>
      </TaskInfo>

      {!tasks.length ? (
        <EmptyTask>
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </EmptyTask>
      ) : (
        <ListTask>
          {tasks.map((task, index) => {
            return (
              <ItemTask key={index}>
                <button
                  title="Checar o botão"
                  type="button"
                  onClick={() => onClickIsCompleted(index)}
                >
                  {!task.isCompleted ? (
                    <Circle size={24} weight="bold" color="#4eabde" />
                  ) : (
                    <CheckCircle size={24} weight="fill" color="#5E60CE" />
                  )}
                </button>
                {!task.isCompleted ? (
                  <LineTask>{task.task}</LineTask>
                ) : (
                  <LineTaskCompleted>{task.task}</LineTaskCompleted>
                )}
                <button
                  title="Deletar task"
                  type="button"
                  onClick={() => ondDeleteTask(task.id)}
                >
                  <Trash size={24} color="#808080" />
                </button>
              </ItemTask>
            )
          })}
        </ListTask>
      )}
    </Container>
  )
}
