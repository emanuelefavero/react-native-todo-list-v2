import { create } from 'zustand'

export const useNewTodoInputStore = create((set) => ({
  newTodoInput: '',
  setNewTodoInput: (value) => set({ newTodoInput: value }),
}))
