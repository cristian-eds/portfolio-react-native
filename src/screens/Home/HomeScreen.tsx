import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './HomeScreenStyles';
import { styles as globalStyles} from '../../styles/GlobalStyles'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import imagePerfil from '../../../assets/img_perfil.jpeg';
import { LinksItem } from '../../components/LinksItem/LinksItem';

export function HomeScreen() {
  return (
    <View style={styles.containerHome}>
        <View style={styles.containerImage}>
            <Image source={imagePerfil} style={styles.imgPerfil}/>
        </View>
        <View style={styles.containerTitles}>
            <Text style={globalStyles.title}>Cristian Eduardo dos Santos</Text>
            <Text style={globalStyles.subtitle}>Developer Full Stack Web - Mobile</Text>
        </View>
        <View style={styles.containerLinks}>
            <Text style={[globalStyles.caption, {paddingLeft: 12}]}>
              Links
            </Text>
            <LinksItem typeLink='GitHub' usernameLink='cristian-eds' iconName='github'/>
            <LinksItem typeLink='Linkedin' usernameLink='cristian-edss' iconName='linkedin'/>
            <LinksItem typeLink='E-mail' usernameLink='cristian.santos0308@gmail.com' iconName='email'/>
        </View>
    </View>
  );
}