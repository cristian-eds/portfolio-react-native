import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { styles } from './SkillsItemStyles';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface SkillsItemProps {
    numberRatingStars: number,
    children: ReactNode
}

export function SkillsItem(props: SkillsItemProps) {

    const generateRatingStars = () => {
        let stars = [];
        for (let index = 0; index < props.numberRatingStars; index++) {
            stars.push(<MaterialCommunityIcons name="star" size={16} color="#a67202" key={index}/>)
        }
        return stars;
    }

    return (
        <View style={styles.linksItem}>
            {props.children}
            <Text>{generateRatingStars()}</Text>
        </View>
    );
}