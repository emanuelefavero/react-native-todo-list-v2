import { FlatList, View, useColorScheme, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import SwipableTodo from '@/components/SwipableTodo'
import CompletedTodosHeader from '@/components/CompletedTodosHeader'
import colors from '@/styles/colors'

export default function Todos() {
  const colorScheme = useColorScheme()
  const todos = useSelector((state) => state.todos)

  const incompleteTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <FlatList
      data={incompleteTodos}
      renderItem={({ item }) => (
        <SwipableTodo todo={item} colorScheme={colorScheme} />
      )}
      keyExtractor={(todo) => todo.id}
      ListFooterComponent={() => (
        <>
          {incompleteTodos.length > 0 && completedTodos.length > 0 && (
            <View
              style={[
                styles.separator,
                {
                  backgroundColor:
                    colorScheme === 'dark'
                      ? colors.separatorDark
                      : colors.separator,
                },
              ]}
            />
          )}
          {completedTodos.length > 0 && (
            <FlatList
              data={completedTodos}
              renderItem={({ item }) => (
                <SwipableTodo todo={item} colorScheme={colorScheme} />
              )}
              keyExtractor={(todo) => todo.id}
              ListHeaderComponent={<CompletedTodosHeader />}
            />
          )}
        </>
      )}
      style={styles.todosContainer}
      alwaysBounceVertical={false}
    />
  )
}

const styles = StyleSheet.create({
  todosContainer: {
    flex: 1,
  },

  separator: {
    height: 1,
  },
})
