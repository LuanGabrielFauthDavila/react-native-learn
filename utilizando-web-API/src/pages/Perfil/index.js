import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

//COMPONENTS
import TopBar from '../../components/TopBar';
import Main from './components/main';
import Detail from './components/detail';


export default function Perfil () {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params

    return (
        <View>
            <Main avatar_url={item.avatar_url} />
            <Detail {...item} />
            <TopBar />
        </View>
    )
}