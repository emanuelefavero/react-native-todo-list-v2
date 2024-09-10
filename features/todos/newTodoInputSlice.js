import { createSlice } from '@reduxjs/toolkit'

const newTodoInputSlice = createSlice({
  name: 'newTodoInput',
  initialState: '',
  reducers: {
    setNewTodoInput: (state, action) => action.payload,
  },
})

export const { setNewTodoInput } = newTodoInputSlice.actions

export default newTodoInputSlice.reducer
