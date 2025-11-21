import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { initialTodos } from '@/data/initialTodos'
import uuid from 'react-native-uuid'

// Todos store with persistence
export const useTodosStore = create(
  persist(
    (set, get) => ({
      todos: initialTodos,
      addTodo: (value) =>
        set((state) => ({
          todos: [{ id: uuid.v4(), value, completed: false }, ...state.todos],
        })),
      completeTodo: (id) =>
        set((state) => {
          const updatedTodos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
          return {
            todos: updatedTodos.sort((a, b) => a.completed - b.completed),
          }
        }),
      editTodo: (id, value) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, value } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      deleteAllTodos: () => set({ todos: [] }),
      deleteCompletedTodos: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),
    }),
    {
      name: 'todos-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

// Modal store
export const useModalStore = create((set) => ({
  showDeleteTodosModal: false,
  modalType: 'deleteAllTodos',
  setShowDeleteTodosModal: (value) => set({ showDeleteTodosModal: value }),
  setModalType: (value) => set({ modalType: value }),
}))

// New todo input store
export const useNewTodoInputStore = create((set) => ({
  newTodoInput: '',
  setNewTodoInput: (value) => set({ newTodoInput: value }),
}))
