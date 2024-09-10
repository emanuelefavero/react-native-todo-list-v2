import React from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import AntDesign from '@expo/vector-icons/AntDesign'
import useSwipeGesture from '@/hooks/useSwipeGesture'
import colors from '@/styles/colors'
import Todo from './Todo'

export default function SwipableTodo({ todo, colorScheme }) {
  const { translateX, onGestureEvent, onHandlerStateChange } =
    useSwipeGesture(todo)

  const iconSize = translateX.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: [1.15, 1, 1.15],
    extrapolate: 'clamp',
  })

  const redBackgroundOpacity = translateX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const greenBackgroundOpacity = translateX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })

  return (
    <View>
      <Animated.View
        style={[styles.greenBackground, { opacity: greenBackgroundOpacity }]}
      >
        <Animated.Text style={{ transform: [{ scale: iconSize }] }}>
          <AntDesign
            name={todo.completed ? 'arrowup' : 'check'}
            size={22}
            color={colorScheme === 'dark' ? colors.text : colors.textDark}
          />
        </Animated.Text>
      </Animated.View>

      <Animated.View
        style={[styles.redBackground, { opacity: redBackgroundOpacity }]}
      >
        <Animated.Text style={{ transform: [{ scale: iconSize }] }}>
          <AntDesign
            name='delete'
            size={22}
            color={colorScheme === 'dark' ? colors.text : colors.textDark}
          />
        </Animated.Text>
      </Animated.View>

      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
        // Only activate the swipe gesture when the movement is horizontal
        activeOffsetX={[-30, 30]} // Horizontal swipe sensitivity
        activeOffsetY={[-100, 100]} // Allow vertical gestures to pass through
      >
        <Animated.View style={{ transform: [{ translateX }] }}>
          <Todo todo={todo} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  redBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.danger,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },

  greenBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
})
