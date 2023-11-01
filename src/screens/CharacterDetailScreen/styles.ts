import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'red',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  hStack: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  tilte: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subTilte: {
    fontSize: 16,
    color: 'gray',
  },
})
