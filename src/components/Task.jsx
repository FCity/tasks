import { useState, useReducer, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FaEdit, FaTrash, FaPaperPlane } from 'react-icons/fa'
import { updateTask, deleteTask } from '../slices/taskSlice'

const Task = ({ task, index }) => {
  const [newTask, setNewTask] = useState(task.task)
  const [taskCompleted, setTaskCompleted] = useState(task.completed)
  const [show, toggle] = useReducer(state => !state, false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTask({ index, newTask, taskCompleted }))
  }, [taskCompleted])

  const updateTaskHandler = () => {
    dispatch(updateTask({ index, newTask, taskCompleted }))
    toggle()
  }

  const completedTaskHandler = () => {
    setTaskCompleted(prevVal => !prevVal)
  }

  const deleteTaskHandler = () => {
    dispatch(deleteTask(index))
  }

  return (
    <div className='row d-flex justify-content-between align-items-center py-1'>
      <div className='col-8'>
        {show ?
          <div className='input-group'>
            <input
              type="text"
              className='form-control'
              value={newTask}
              placeholder='Edit Task'
              onChange={e => setNewTask(e.target.value)}
            />
            <button className='btn btn-dark' onClick={updateTaskHandler}>
              <FaPaperPlane />
            </button>
          </div>
          :
          <div className='d-flex align-items-center'>
            <input
              type="checkbox"
              className='form-check-input'
              value={taskCompleted}
              onChange={completedTaskHandler}
            />
            <h6 className={`px-3 ${taskCompleted ? 'text-decoration-line-through' : ''}`}>{newTask}</h6>
          </div>
        }
      </div>
      <div className='actions col-4 btn-group'>
        <button className='btn btn-primary' onClick={toggle}>
          <FaEdit />
        </button>
        <button className='btn btn-danger' onClick={deleteTaskHandler}>
          <FaTrash />
        </button>
      </div>
    </div>
  )
}
export default Task