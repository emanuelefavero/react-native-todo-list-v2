import { useRef } from 'react'
import { Animated } from 'react-native'
import { useDispatch } from 'react-redux'
import * as Haptics from 'expo-haptics'
import { deleteTodo, completeTodo } from '@/features/todos/todosSlice'

export default function useSwipeGesture(todo) {
  const dispatch = useDispatch()
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
          dispatch(deleteTodo(todo.id))
        } else if (swipeDistance < -swipeTriggerDistance) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          dispatch(completeTodo(todo.id))
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
