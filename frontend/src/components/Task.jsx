import { useState, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, editTask } from '../slices/taskSlice'

const Task = ({ task, index }) => {
  const [newTask, setNewTask] = useState(task)
  const [show, toggle] = useReducer(state => !state, false)

  const dispatch = useDispatch()

  const removeTaskHandler = () => {
    dispatch(removeTask(index))
  }

  const editTaskHandler = () => {
    dispatch(editTask({ newTask, index }))
    toggle()
  }

  return (
    <div className='row d-flex justify-content-between align-items-center py-1'>
      <div className='col-6'>
        {show ?
          <div className='input-group'>
            <input
              type="text"
              className='form-control'
              value={newTask}
              placeholder='Edit Task'
              onChange={e => setNewTask(e.target.value)}
            />
            <button className='btn btn-primary' onClick={editTaskHandler}>&rarr;</button>
          </div>
          :
          <h5 className=''>{task}</h5>
        }
      </div>
      <div className='col-6 btn-group'>
        <button className='btn btn-primary' onClick={toggle}>Edit</button>
        <button className='btn btn-danger' onClick={removeTaskHandler}>X</button>
      </div>
    </div>
  )
}
export default Task