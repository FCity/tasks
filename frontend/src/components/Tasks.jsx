import { useSelector } from 'react-redux'
import Task from './Task'

const Tasks = () => {
  const { tasks } = useSelector(state => state.task)

  return (
    <div className='tasks'>
      <div className='row'>
        <p className='col-6 display-6 text-decoration-underline'>Tasks</p>
        <p className='col-6 display-6 text-decoration-underline'>Actions</p>
      </div>
      <div>
        {tasks.map((task, index) => (
          <Task key={index} task={task} index={index} />
        ))}
      </div>
    </div>
  )
}
export default Tasks