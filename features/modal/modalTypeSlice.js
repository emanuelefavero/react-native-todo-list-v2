import { createSlice } from '@reduxjs/toolkit'

const modalTypeSlice = createSlice({
  name: 'modalType',
  initialState: 'deleteAllTodos',
  reducers: {
    setModalType: (state, action) => action.payload,
  },
})

export const { setModalType } = modalTypeSlice.actions

export default modalTypeSlice.reducer
