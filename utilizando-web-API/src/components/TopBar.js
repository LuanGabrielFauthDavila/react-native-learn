import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//ASSETS
import BackArrow from '../assets/icons/backArrow.png'

const dimensions = Dimensions.get('screen')


export default function TopBar () {
    const navigation = useNavigation();

    return (
        <View 
            style={styles.Top}>
            <TouchableOpacity 
            style={styles.BackArrowBtn}
            onPress={() => navigation.goBack()} >
                <Image source={BackArrow} style={styles.BackArrow} />
            </TouchableOpacity>
            <Text>Topo Titulo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Top: {
        position: 'absolute',
        width: dimensions.width,
        height: dimensions.height*0.08,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BackArrowBtn: {
        position: 'absolute',
        left: 0,
        marginLeft: '5%'
    },
    BackArrow: {
        width: 24,
        height: 24,
    }
})