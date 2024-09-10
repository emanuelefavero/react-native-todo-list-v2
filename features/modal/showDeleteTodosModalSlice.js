import { createSlice } from '@reduxjs/toolkit'

const showDeleteTodosModalSlice = createSlice({
  name: 'showDeleteTodosModal',
  initialState: false,
  reducers: {
    setShowDeleteTodosModal: (state, action) => action.payload,
  },
})

export const { setShowDeleteTodosModal } = showDeleteTodosModalSlice.actions

export default showDeleteTodosModalSlice.reducer
