import colors from '@/styles/colors'
import { useColorScheme, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import useLoadFonts from '@/hooks/useLoadFonts'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import TodoList from '@/screens/TodoList'
import About from '@/screens/About'

const Tab = createBottomTabNavigator() // create bottom tab navigator ↓

export default function Layout() {
  const colorScheme = useColorScheme() // check dark/light mode
  const { loaded, error } = useLoadFonts() // load fonts

  if (!loaded && !error) return null // show nothing while fonts are loading

  return (
    // Main layout container
    <SafeAreaView
      style={[
        styles.appSafeArea,
        colorScheme === 'dark' && darkStyles.appSafeArea,
      ]}
    >
      {/* Status Bar */}
      <StatusBar style='auto' translucent />

      {/* App Screens */}
      <Tab.Navigator
        // Screen options for the tab navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            // Determine icon name based on route
            if (route.name === 'TodoList') {
              iconName = focused ? 'list' : 'list-outline'
            } else if (route.name === 'About') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },

          // Tab bar colors
          tabBarActiveTintColor:
            colorScheme === 'dark' ? colors.textDark : colors.text,
          tabBarInactiveTintColor: 'gray',

          // Tab bar style
          tabBarStyle: {
            backgroundColor:
              colorScheme === 'dark'
                ? colors.backgroundDark
                : colors.background,
            height: 40,
            paddingTop: 0,
            paddingBottom: 0,
            borderTopWidth: 1,
            borderTopColor:
              colorScheme === 'dark' ? colors.borderDark : colors.border,
          },

          // Tab bar animation when switching tabs
          animation: 'shift', // 'shift' | 'fade' | 'none'

          // Header styles
          headerStyle: {
            backgroundColor:
              colorScheme === 'dark'
                ? colors.backgroundDark
                : colors.background,
          },

          // Header text styles
          headerTintColor:
            colorScheme === 'dark' ? colors.textDark : colors.text,

          // Header title text styles
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        {/* Tab Screens */}
        <Tab.Screen
          name='TodoList'
          component={TodoList}
          options={{
            title: 'Todo List',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='About'
          component={About}
          options={{
            title: 'About',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
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
