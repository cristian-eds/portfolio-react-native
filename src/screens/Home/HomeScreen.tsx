import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './HomeScreenStyles';
import { styles as globalStyles} from '../../styles/GlobalStyles';

import imagePerfil from '../../../assets/img_perfil.jpeg';
import { LinksItem } from '../../components/LinksItem/LinksItem';

export function HomeScreen() {
  return (
    <View style={globalStyles.containerMain}>
        <View style={styles.containerImage}>
            <Image source={imagePerfil} style={styles.imgPerfil}/>
        </View>
        <View style={styles.containerTitles}>
            <Text style={globalStyles.title}>Cristian Eduardo dos Santos</Text>
            <Text style={globalStyles.subtitle}>Developer Full Stack Web - Mobile</Text>
        </View>
        <View style={styles.containerLinks}>
            <Text style={globalStyles.caption}>
              Links
            </Text>
            <LinksItem typeLink='GITHUB' usernameLink='cristian-eds' iconName='github'/>
            <LinksItem typeLink='LINKEDIN' usernameLink='cristian-edss' iconName='linkedin'/>
            <LinksItem typeLink='EMAIL' usernameLink='cristian.santos0308@gmail.com' iconName='email'/>
        </View>
    </View>
  );
}