import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaPaperPlane } from 'react-icons/fa'
import { addTask } from '../slices/taskSlice'

const AddTask = () => {
  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()

    dispatch(addTask(task))

    setTask('')
  }

  return (
    <div className="container">
      <form className='my-4'>
        <div className="input-group">
          <input
            type="text"
            className='form-control'
            value={task}
            placeholder='Add a task'
            onChange={e => setTask(e.target.value)}
          />
          <button className='btn btn-dark' onClick={submitHandler}>
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  )
}
export default AddTask