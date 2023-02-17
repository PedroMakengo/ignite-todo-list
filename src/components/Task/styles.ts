import styled from 'styled-components'

export const Container = styled.div`
  max-width: 730px;

  margin: 6rem auto;
`

export const TaskInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;
`

export const BaseTask = styled.div`
  display: flex;
  gap: 1rem;
`

export const TaskCreated = styled(BaseTask)`
  color: ${(props) => props.theme['blue']};
`

export const TaskDone = styled(BaseTask)`
  color: ${(props) => props.theme['purple']};
`

export const Counter = styled.span`
  width: 25px;
  height: 19px;
  background: ${(props) => props.theme['gray-400']};

  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['gray-100']};
  font-size: 12px;
`

export const EmptyTask = styled.div`
  padding: 64px 24px;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme['gray-300']};
  gap: 0.5rem;

  font-size: 1rem;
  text-align: center;
`

export const ListTask = styled.div`
  display: flex;

  flex-direction: column;
  gap: 18px;
`

export const ItemTask = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  background: ${(props) => props.theme['gray-400']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  padding: 1rem;
  border-radius: 8px;

  p {
    flex: 1;
    color: ${(props) => props.theme['gray-100']};
  }

  button {
    background: transparent;
    border: 0;
  }
`
