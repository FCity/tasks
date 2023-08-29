import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    'Get up',
    'Drink',
    'Work'
  ]
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    removeTask: (state, action) => {
      state.tasks.splice(action.payload, 1)
    },
    editTask: (state, action) => {
      state.tasks.splice(action.payload.index, 1, action.payload.newTask)
    }
  }
})

export const { addTask, removeTask, editTask } = taskSlice.actions

export default taskSlice.reducer