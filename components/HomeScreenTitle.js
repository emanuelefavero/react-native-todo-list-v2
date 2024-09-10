import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { View, Text, StyleSheet, useColorScheme } from 'react-native'

export default function TodosTitle() {
  const colorScheme = useColorScheme() // dark mode

  return (
    <View style={styles.titleContainer}>
      <Text
        style={[
          styles.title,
          {
            color: colorScheme === 'dark' ? colors.textDark : colors.text,
          },
        ]}
      >
        React Native Essentials
      </Text>
    </View>
  )
}

// ---

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    // backgroundColor: 'gray',
    marginTop: 8,
    marginBottom: 16,
  },

  title: {
    fontFamily: 'SF Pro Rounded',
    fontSize: fontSizes.homeScreenTitle,
    fontWeight: 800,
  },
})
