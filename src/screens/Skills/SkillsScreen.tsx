import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './SkillsScreenStyles';
import { styles as globalStyles } from '../../styles/GlobalStyles';

import imagePerfil from '../../../assets/img_perfil.jpeg';

import { SkillsItem } from '../../components/SkillsItem/SkillsItem';

export function SkillsScreen() {
  return (
    <View style={globalStyles.containerMain}>
      <View style={styles.containerHeader}>
        <View style={styles.containerImage}>
          <Image source={imagePerfil} style={styles.imgPerfil} />
        </View>
        <View style={styles.containerText}>
          <Text style={globalStyles.title}>Cristian Eduardo dos Santos</Text>
        </View>
      </View>
      <View style={styles.containerSkills}>
        <Text style={globalStyles.subtitle}>My Skills</Text>
        <Text style={[globalStyles.caption,{marginTop:10}]}>Main Technologies</Text>
        <SkillsItem numberRatingStars={3}>
            <Text style={globalStyles.text}>Java + Spring</Text>
        </SkillsItem>
        <SkillsItem numberRatingStars={3}>
            <Text style={globalStyles.text}>React + JS / TS</Text>
        </SkillsItem>
        <SkillsItem numberRatingStars={3}>
            <Text style={globalStyles.text}>React Native</Text>
        </SkillsItem>

        <Text style={[globalStyles.caption,{marginTop:10}]}>Other Skills</Text>
        <SkillsItem numberRatingStars={4}>
            <Text style={globalStyles.text}>SQL</Text>
        </SkillsItem>
      </View>
    </View>
  );
}