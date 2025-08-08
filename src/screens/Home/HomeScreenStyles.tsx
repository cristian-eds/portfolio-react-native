import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  containerImage: {
    height: 200,
    width: 200,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  imgPerfil: {
    height: '100%',
    resizeMode: 'contain',
  }
});