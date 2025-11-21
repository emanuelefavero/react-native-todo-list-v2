import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { Text, Pressable, StyleSheet } from 'react-native'
import { useTodosStore, useModalStore } from '@/store'

export default function DeleteTodosButton({ type = 'all' }) {
  const todos = useTodosStore((state) => state.todos)
  const setModalType = useModalStore((state) => state.setModalType)
  const setShowDeleteTodosModal = useModalStore(
    (state) => state.setShowDeleteTodosModal
  )

  if (todos.length === 0) return null

  return (
    <Pressable
      onPress={() => {
        setModalType(type === 'all' ? 'deleteAllTodos' : 'deleteCompletedTodos')
        setShowDeleteTodosModal(true)
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
