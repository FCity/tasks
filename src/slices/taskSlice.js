import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    {
      task: 'Task #1',
      completed: false
    },
    {
      task: 'Task #2',
      completed: false
    },
    {
      task: 'Task #3',
      completed: false
    }
  ]
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ task: action.payload, completed: false })
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1)
    },
    updateTask: (state, action) => {
      state.tasks.splice(action.payload.index, 1, { task: action.payload.newTask, completed: action.payload.taskCompleted })
    }
  }
})

export const { addTask, updateTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer