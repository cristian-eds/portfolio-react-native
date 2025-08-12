import React from 'react';
import { View } from 'react-native';

import { styles as globalStyles } from '../../styles/GlobalStyles';

import { CardProject } from '../../components/CardProject/CardProject';

import { projects } from '../../data/projects';

export function ProjectsScreen() {
  return (
    <View style={globalStyles.containerMain}>
        { projects.map((project, index) => <CardProject {...project} key={index}/> ) }
    </View>
  );
}