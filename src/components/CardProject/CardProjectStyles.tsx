import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: 'white',
    height: 135,
    width: '100%',
    marginVertical: 15,
    borderRadius: 10,
    elevation:3,
    padding: 15,
    justifyContent: 'space-between'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  headerIcons: {
    flexDirection: 'row'
  }
});