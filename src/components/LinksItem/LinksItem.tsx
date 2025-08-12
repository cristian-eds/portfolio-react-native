import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './LinksItemStyles';
import { styles as globalStyles} from '../../styles/GlobalStyles';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { PrefixUrl } from '../../utils/URLPrefix';
import handleLinkToUrl from '../../services/openUrlLinkService';

interface LinksItemProps {
    typeLink: keyof typeof PrefixUrl,
    usernameLink: string,
    iconName: keyof typeof MaterialCommunityIcons.glyphMap
}

export function LinksItem(props: LinksItemProps) {
    return (
        <Pressable style={styles.linksItem} onPress={() => handleLinkToUrl(props.usernameLink, PrefixUrl[props.typeLink])}>
            <Text style={globalStyles.text}><MaterialCommunityIcons name={props.iconName} size={16} color="black" /> {props.typeLink}</Text>
            <Text style={globalStyles.text} selectable> {props.usernameLink}</Text>
        </Pressable>
    );
}