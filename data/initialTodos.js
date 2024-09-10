import uuid from 'react-native-uuid'

export const initialTodos = [
  { id: uuid.v4(), value: 'Add a new task', completed: false },
  { id: uuid.v4(), value: 'Click a task to complete it', completed: false },
  { id: uuid.v4(), value: '<- Or swipe left to complete it', completed: false },
  { id: uuid.v4(), value: '-> Swipe right to delete a task', completed: false },
  {
    id: uuid.v4(),
    value: 'Press and hold a task to edit it.',
    completed: true,
  },
]
