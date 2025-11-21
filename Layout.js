import colors from '@/styles/colors'
import { useColorScheme, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import useLoadFonts from '@/hooks/useLoadFonts'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import TodoList from '@/components/TodoList'
import About from '@/components/About'

const Tab = createBottomTabNavigator()

export default function Layout() {
  const colorScheme = useColorScheme() // dark mode
  const { loaded, error } = useLoadFonts() // load fonts

  if (!loaded && !error) return null // show nothing while fonts are loading

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'TodoList') {
              iconName = focused ? 'list' : 'list-outline'
            } else if (route.name === 'About') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor:
            colorScheme === 'dark' ? colors.textDark : colors.text,
          tabBarInactiveTintColor: 'gray',
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
          headerStyle: {
            backgroundColor:
              colorScheme === 'dark'
                ? colors.backgroundDark
                : colors.background,
          },
          headerTintColor:
            colorScheme === 'dark' ? colors.textDark : colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
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
