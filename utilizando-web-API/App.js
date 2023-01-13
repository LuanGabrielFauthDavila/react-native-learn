import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import Routes from './src/routes/Routes';


export default function App () {
    return <>
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <Routes />
        </SafeAreaView>
    </>
}