import React, { ReactNode } from 'react';
import { Linking, Pressable, Text, View } from 'react-native';

import { styles } from './CardProjectStyles';
import { styles as globalStyles } from '../../styles/GlobalStyles';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { PrefixUrl } from '../../utils/URLPrefix';
import handleLinkToUrl from '../../services/openUrlLinkService';

interface CardProjectProps {
    title: string,
    description: string,
    urlLink: string,
    icons: ReactNode[]
}

export function CardProject(props: CardProjectProps) {

    const handlePressToLink = () => {
        if(props.urlLink !== 'private') handleLinkToUrl(props.urlLink, PrefixUrl.DEFAULT);
    }

    return (
        <View style={styles.containerCard}>
            <View style={styles.cardHeader}>
                <Text style={globalStyles.text}>{props.title}</Text>
                <View style={styles.headerIcons}>
                    {props.icons}
                </View>
            </View>
            <Text>{props.description}</Text>
            <Pressable style={styles.cardHeader} onPress={handlePressToLink}>
                <Text><MaterialCommunityIcons name="link-variant" size={20} color="black" /> {props.urlLink}</Text>
            </Pressable>
        </View>
    );
}