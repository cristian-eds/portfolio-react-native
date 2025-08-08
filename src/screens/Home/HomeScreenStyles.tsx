import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#c6d0dbff'
  },
  containerImage: {
    height: 180,
    width: 180,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15
  },
  imgPerfil: {
    height: '100%',
    resizeMode: 'contain',
  },
  containerTitles: {
    alignItems: 'center',
    gap: 5,
    marginVertical: 15
  },
  containerLinks: {
    flex: 1,
    width: '100%',
    gap: 10,
    marginVertical: 15,
    paddingTop:20
  },

});