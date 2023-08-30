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
    removeTask: (state, action) => {
      state.tasks.splice(action.payload, 1)
    },
    editTask: (state, action) => {
      state.tasks.splice(action.payload.index, 1, { task: action.payload.newTask, completed: false })
    },
    completeTask: (state, action) => {
      state.tasks.splice(action.payload.index, 1, { task: action.payload.newTask, completed: true })
    }
  }
})

export const { addTask, removeTask, editTask, completeTask } = taskSlice.actions

export default taskSlice.reducer