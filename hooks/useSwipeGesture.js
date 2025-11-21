import { useRef } from 'react'
import { Animated } from 'react-native'
import * as Haptics from 'expo-haptics'
import { useTodosStore } from '@/store'

export default function useSwipeGesture(todo) {
  const deleteTodo = useTodosStore((state) => state.deleteTodo)
  const completeTodo = useTodosStore((state) => state.completeTodo)
  const translateX = useRef(new Animated.Value(0)).current
  const swipeTriggerDistance = 125

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    {
      useNativeDriver: true,
      listener: (event) => {
        const swipeDistance = event.nativeEvent.translationX

        if (swipeDistance > swipeTriggerDistance) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
          deleteTodo(todo.id)
        } else if (swipeDistance < -swipeTriggerDistance) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          completeTodo(todo.id)
        }
      },
    }
  )

  const onHandlerStateChange = () => {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  return { translateX, onGestureEvent, onHandlerStateChange }
}
