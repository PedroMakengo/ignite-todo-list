import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Task />
      <GlobalStyle />
    </ThemeProvider>
  )
}
