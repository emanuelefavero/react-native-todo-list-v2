import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { Text, Pressable, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setShowDeleteTodosModal } from '@/features/modal/showDeleteTodosModalSlice'
import { setModalType } from '@/features/modal/modalTypeSlice'

export default function DeleteTodosButton({ type = 'all' }) {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  if (todos.length === 0) return null

  return (
    <Pressable
      onPress={() => {
        dispatch(
          setModalType(
            type === 'all' ? 'deleteAllTodos' : 'deleteCompletedTodos'
          )
        )
        dispatch(setShowDeleteTodosModal(true))
      }}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
    >
      <Text style={styles.deleteTodosButtonText}>
        Clear {type === 'all' ? 'All' : 'Completed'}
      </Text>
    </Pressable>
  )
}

// ---

const styles = StyleSheet.create({
  deleteTodosButtonText: {
    color: colors.danger,
    fontSize: fontSizes.button,
  },
})
