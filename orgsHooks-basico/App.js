import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import Home from './src/screen/Home';

export default function App () {
    return <SafeAreaView style={styles.app}>
        <Home />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    app: {
        flex: 1
    }
})
