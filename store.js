import { configureStore } from '@reduxjs/toolkit'
import showDeleteTodosModalReducer from '@/features/modal/showDeleteTodosModalSlice'
import modalTypeReducer from '@/features/modal/modalTypeSlice'
import todosReducer from '@/features/todos/todosSlice'
import newTodoInputReducer from '@/features/todos/newTodoInputSlice'

export const store = configureStore({
  reducer: {
    // modal
    showDeleteTodosModal: showDeleteTodosModalReducer,
    modalType: modalTypeReducer,

    // todos
    todos: todosReducer,
    newTodoInput: newTodoInputReducer,
  },
})
