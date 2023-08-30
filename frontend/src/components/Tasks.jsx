import { useSelector } from 'react-redux'
import Task from './Task'

const Tasks = () => {
  const { tasks } = useSelector(state => state.task)

  return (
    <div className='container'>
      <div>
        {tasks.map((task, index) => (
          <Task key={index} task={task} index={index} />
        ))}
      </div>
    </div>
  )
}
export default Tasks