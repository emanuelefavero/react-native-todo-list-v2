import { useRef } from 'react'
import { Animated } from 'react-native'
import { Gesture } from 'react-native-gesture-handler'
import * as Haptics from 'expo-haptics'
import { useTodosStore } from '@/store'

export default function useSwipeGesture(todo) {
  const deleteTodo = useTodosStore((state) => state.deleteTodo)
  const completeTodo = useTodosStore((state) => state.completeTodo)
  const translateX = useRef(new Animated.Value(0)).current
  const swipeTriggerDistance = 125

  const panGesture = Gesture.Pan()
    .activeOffsetX([-30, 30])
    .activeOffsetY([-100, 100])
    .onUpdate((event) => {
      translateX.setValue(event.translationX)
    })
    .onEnd((event) => {
      const swipeDistance = event.translationX

      if (swipeDistance > swipeTriggerDistance) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        deleteTodo(todo.id)
      } else if (swipeDistance < -swipeTriggerDistance) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        completeTodo(todo.id)
      }

      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    })

  return { translateX, panGesture }
}
