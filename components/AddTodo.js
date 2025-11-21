import { Alert } from 'react-native'
import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import {
  View,
  TextInput,
  Text,
  Pressable,
  useColorScheme,
  StyleSheet,
} from 'react-native'
import * as Haptics from 'expo-haptics'
import { useTodosStore } from '@/store'
import { useNewTodoInputStore } from '@/store'
import useValidateTodo from '@/hooks/useValidateTodo'

export default function AddTodo() {
  const colorScheme = useColorScheme()
  const newTodoInput = useNewTodoInputStore((state) => state.newTodoInput)
  const setNewTodoInput = useNewTodoInputStore((state) => state.setNewTodoInput)
  const addTodo = useTodosStore((state) => state.addTodo)
  const { validate } = useValidateTodo()

  const handleAddTodo = () => {
    const { isValid, alertTitle, alertMessage, trimmedNewTodoInput } =
      validate(newTodoInput)

    if (!isValid) {
      Alert.alert(alertTitle, alertMessage, [{ text: 'OK' }])
      return
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    addTodo(trimmedNewTodoInput)
    setNewTodoInput('')
  }

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        value={newTodoInput}
        onChangeText={setNewTodoInput}
        placeholder='New Todo'
        placeholderTextColor={
          colorScheme === 'dark' ? 'rgb(129, 129, 136)' : 'rgb(145, 145, 152)'
        }
        clearButtonMode='while-editing'
        onSubmitEditing={handleAddTodo}
        returnKeyType='done'
        style={[styles.input, colorScheme === 'dark' && darkStyles.input]}
      />
      <Pressable
        onPress={handleAddTodo}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
      >
        <Text style={{ color: colors.button, fontSize: fontSizes.button }}>
          Add Todo
        </Text>
      </Pressable>
    </View>
  )
}

// ---

const styles = StyleSheet.create({
  addTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },

  input: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    color: colors.text,
    fontSize: fontSizes.default,
    padding: 8,
    borderRadius: 10,
    marginRight: 12,
  },
})

const darkStyles = StyleSheet.create({
  input: {
    backgroundColor: colors.inputBackgroundDark,
    color: colors.textDark,
  },
})
