import colors from '@/styles/colors'
import { View, Text, useColorScheme, StyleSheet, Linking } from 'react-native'

export default function About() {
  const colorScheme = useColorScheme()

  const handlePortfolioPress = () => {
    Linking.openURL('https://emanuelefavero.com')
  }

  return (
    <View
      style={[styles.container, colorScheme === 'dark' && darkStyles.container]}
    >
      <Text style={[styles.title, colorScheme === 'dark' && darkStyles.title]}>
        Todo List
      </Text>
      <Text
        style={[styles.version, colorScheme === 'dark' && darkStyles.version]}
      >
        Version 2.0
      </Text>
      <Text
        style={[
          styles.developer,
          colorScheme === 'dark' && darkStyles.developer,
        ]}
      >
        Developed by Emanuele Favero
      </Text>
      <Text
        style={[
          styles.portfolio,
          colorScheme === 'dark' && darkStyles.portfolio,
        ]}
        onPress={handlePortfolioPress}
      >
        emanuelefavero.com
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  version: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 16,
  },
  developer: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 8,
  },
  portfolio: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
})

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDark,
  },
  title: {
    color: colors.textDark,
  },
  version: {
    color: colors.textDark,
  },
  developer: {
    color: colors.textDark,
  },
  portfolio: {
    color: 'lightblue',
  },
})
