import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './LinksItemStyles';
import { styles as globalStyles} from '../../styles/GlobalStyles'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface LinksItemProps {
    typeLink: string,
    usernameLink: string,
    iconName: keyof typeof MaterialCommunityIcons.glyphMap
}

export function LinksItem(props: LinksItemProps) {
    return (
        <View style={styles.linksItem}>
            <Text style={globalStyles.text}><MaterialCommunityIcons name={props.iconName} size={16} color="black" /> {props.typeLink}</Text>
            <Text style={globalStyles.text} selectable> {props.usernameLink}</Text>
        </View>
    );
}