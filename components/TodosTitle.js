import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { View, Text, StyleSheet } from 'react-native'
import DeleteTodosButton from '@/components/DeleteTodosButton'

export default function TodosTitle() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Todo</Text>

      <DeleteTodosButton type='all' />
    </View>
  )
}

// ---

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
    paddingTop: 16,
    // backgroundColor: 'gray',
  },

  title: {
    fontFamily: 'SF Pro Rounded',
    color: colors.primary,
    fontSize: fontSizes.title,
    fontWeight: 800,
  },
})
