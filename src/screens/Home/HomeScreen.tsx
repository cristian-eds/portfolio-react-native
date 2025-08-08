import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './HomeScreenStyles';

import imagePerfil from '../../../assets/img_perfil.jpeg';

export function HomeScreen() {
  return (
    <View style={styles.containerHome}>
        <View style={styles.containerImage}>
            <Image source={imagePerfil} style={styles.imgPerfil}/>
        </View>
    </View>
  );
}