import { create } from 'zustand'

export const useModalStore = create((set) => ({
  showDeleteTodosModal: false,
  modalType: 'deleteAllTodos',
  setShowDeleteTodosModal: (value) => set({ showDeleteTodosModal: value }),
  setModalType: (value) => set({ modalType: value }),
}))
