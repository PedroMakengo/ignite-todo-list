import { useState, FormEvent, useEffect } from 'react'

import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export interface Tasks {
  id: string
  task: string
  isCompleted: boolean
}

export function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<Tasks[]>(
    !localStorage.getItem('@ignite-todo-1.0.0')
      ? []
      : JSON.parse(localStorage.getItem('@ignite-todo-1.0.0'))
  )

  useEffect(() => {
    const jsonTask = JSON.stringify(tasks)
    localStorage.setItem('@ignite-todo-1.0.0', jsonTask)
  }, [tasks])

  function createNewTask(event: FormEvent) {
    event.preventDefault()

    const taskCreated = {
      id: new Date().toISOString(),
      task: newTask,
      isCompleted: false,
    }

    setTasks((state: Tasks[]) => [...state, taskCreated])
    setNewTask('')
  }

  function onClickIsCompleted(taskPositionIndex: number) {
    tasks[taskPositionIndex].isCompleted = !tasks[taskPositionIndex].isCompleted
    setTasks([...tasks])
  }

  function ondDeleteTask(idTask: string) {
    const taskDelete = tasks.filter((task) => {
      return task.id !== idTask
    })

    setTasks(taskDelete)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header
        createNewTask={createNewTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <Task
        tasks={tasks}
        onClickIsCompleted={onClickIsCompleted}
        ondDeleteTask={ondDeleteTask}
      />
      <GlobalStyle />
    </ThemeProvider>
  )
}
