import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  vStack: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
})
