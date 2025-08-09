import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { styles } from './CardProjectStyles';
import { styles as globalStyles } from '../../styles/GlobalStyles';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface CardProjectProps {
    title: string,
    description: string,
    urlLink: string,
    icons: ReactNode[]
}

export function CardProject(props: CardProjectProps) {
    return (
        <View style={styles.containerCard}>
            <View style={styles.cardHeader}>
                <Text style={globalStyles.text}>{props.title}</Text>
                <View style={styles.headerIcons}>
                    {props.icons}
                </View>
            </View>
            <Text>{props.description}</Text>
            <View style={styles.cardHeader}>
                <Text><MaterialCommunityIcons name="link-variant" size={20} color="black" /> {props.urlLink}</Text>
            </View>
        </View>
    );
}