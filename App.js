import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Layout from '@/Layout'

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Layout />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}
