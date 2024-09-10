import { useSelector } from 'react-redux'

export default function useValidateTodo() {
  const todos = useSelector((state) => state.todos)

  const validate = (input) => {
    const trimmedNewTodoInput = input.trim()
    const maxTodoLength = 128
    const minTodoLength = 3

    if (trimmedNewTodoInput.length === 0) {
      return {
        isValid: false,
        alertTitle: 'Empty Todo',
        alertMessage: 'Please enter a todo.',
      }
    }
    if (trimmedNewTodoInput.length > maxTodoLength) {
      return {
        isValid: false,
        alertTitle: 'Todo Too Long',
        alertMessage: `Please keep the todo under ${maxTodoLength} characters.`,
      }
    }
    if (trimmedNewTodoInput.length < minTodoLength) {
      return {
        isValid: false,
        alertTitle: 'Todo Too Short',
        alertMessage: `Please enter at least ${minTodoLength} characters.`,
      }
    }
    if (todos.some((todo) => todo.value === trimmedNewTodoInput)) {
      return {
        isValid: false,
        alertTitle: 'Duplicate Todo',
        alertMessage: 'This todo already exists.',
      }
    }

    return { isValid: true, trimmedNewTodoInput }
  }

  return { validate }
}
