import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '100%',
    flexWrap: 'wrap',
    gap: 20
  },
  containerImage: {
    height:100,
    width:100,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems:'center'
  },
  imgPerfil: {
    height:'100%',
    resizeMode: 'contain'
  },
  containerText: {
    flex: 1
  },
  containerSkills: {
    marginVertical: 20,
    width: '100%',
    gap:10
  }
});