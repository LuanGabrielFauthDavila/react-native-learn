import React from 'react';
import { Text, View } from 'react-native';

//COMPONENTS
import TopBar from '../../components/TopBar';
import Main from './components/main';
import Detail from './components/detail';


export default function Perfil () {
    return (
        <View>
            <Main />
            <Detail />
            <TopBar />
        </View>
    )
}