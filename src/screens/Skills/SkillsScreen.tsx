import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './SkillsScreenStyles';
import { styles as globalStyles } from '../../styles/GlobalStyles';

import imagePerfil from '../../../assets/img_perfil.jpeg';

import { SkillsItem } from '../../components/SkillsItem/SkillsItem';

import { skills, otherSkills } from '../../data/skills';

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
        <Text style={[globalStyles.caption, { marginTop: 10 }]}>Main Technologies</Text>
        {skills.map((skill, index) => <SkillsItem numberRatingStars={skill.numberStarRating} key={index}>
          <Text style={globalStyles.text}>{skill.title}</Text>
        </SkillsItem>)}

        <Text style={[globalStyles.caption, { marginTop: 10 }]}>Other Skills</Text>
        {otherSkills.map((skill, index) => <SkillsItem numberRatingStars={skill.numberStarRating} key={index}>
          <Text style={globalStyles.text}>{skill.title}</Text>
        </SkillsItem>)}
      </View>
    </View>
  );
}