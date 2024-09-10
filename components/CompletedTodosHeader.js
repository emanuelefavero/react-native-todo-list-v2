import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import DeleteTodosButton from '@/components/DeleteTodosButton'

export default function CompletedTodosHeader() {
  const colorScheme = useColorScheme()

  return (
    <View style={styles.listHeaderContainer}>
      <Text
        style={[
          styles.listHeader,
          {
            color: colorScheme === 'dark' ? colors.textDark : colors.text,
          },
        ]}
      >
        Completed
      </Text>
      <DeleteTodosButton type='completed' />
    </View>
  )
}

// ---

const styles = StyleSheet.create({
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listHeader: {
    fontFamily: 'SF Pro Rounded',
    fontSize: fontSizes.listHeader,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
