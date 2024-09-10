import colors from '@/styles/colors'
import { View, Button, StyleSheet, useColorScheme } from 'react-native'
import HomeScreenTitle from '@/components/HomeScreenTitle'

export default function HomeScreen({ navigation }) {
  const colorScheme = useColorScheme() // dark mode

  return (
    <View
      style={[
        styles.appContainer,
        colorScheme === 'dark' && darkStyles.appContainer,
      ]}
    >
      <HomeScreenTitle />
      <Button
        title='Go to TodoList'
        onPress={() => navigation.navigate('TodoList')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
})

const darkStyles = StyleSheet.create({
  appContainer: {
    backgroundColor: colors.backgroundDark,
  },
})
