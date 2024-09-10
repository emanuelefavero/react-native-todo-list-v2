import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function useLoadFonts() {
  const [loaded, error] = useFonts({
    'SF Pro Rounded': require('@/assets/fonts/SF-Pro-Rounded-Bold.otf'),
  })

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()

    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  return { loaded, error }
}
