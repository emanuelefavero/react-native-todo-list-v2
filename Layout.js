import colors from '@/styles/colors'
import { SafeAreaView, useColorScheme, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import useLoadFonts from '@/hooks/useLoadFonts'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@/components/HomeScreen'
import TodoList from '@/components/TodoList'

const Stack = createNativeStackNavigator()

export default function Layout() {
  const colorScheme = useColorScheme() // dark mode
  const { loaded, error } = useLoadFonts() // load fonts

  if (!loaded && !error) return null // show nothing while fonts are loading

  const commonHeaderOptions = {
    headerStyle: {
      // Header background color
      backgroundColor:
        colorScheme === 'dark' ? colors.backgroundDark : colors.background,
    },
    // Header text color
    headerTintColor: colorScheme === 'dark' ? colors.textDark : colors.text,

    // Header text style
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  return (
    <SafeAreaView
      style={[
        styles.appSafeArea,
        colorScheme === 'dark' && darkStyles.appSafeArea,
      ]}
    >
      {/* Status Bar */}
      <StatusBar style='auto' translucent />

      {/* App Screens */}
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            title: 'Home',
            headerShown: false,
            ...commonHeaderOptions,
          }}
        />
        <Stack.Screen
          name='TodoList'
          component={TodoList}
          options={{
            ...commonHeaderOptions,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

// ---

const styles = StyleSheet.create({
  appSafeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
})

const darkStyles = StyleSheet.create({
  appSafeArea: {
    backgroundColor: colors.backgroundDark,
  },
})
