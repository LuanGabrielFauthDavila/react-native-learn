import React from 'react';
import { StyleSheet, View, Dimensions, Image  } from 'react-native'; 

const { width, height } = Dimensions.get('screen')


export default function Main () {
    return (
        <View style={styles.main}>
            <View style={styles.coverImage} />
            <View style={styles.bgImage}>
                <Image source={{ uri: 'https://avatars.githubusercontent.com/u/9091491?v=4' }} style={styles.mainImage} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: height*0.38,
    },
    coverImage: {
        width: width,
        height: height*0.30,
        backgroundColor: '#C4C4C4',
    },
    bgImage: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: width*0.4,
        height: width*0.4,
        borderRadius: width*0.4/2,
    },
    mainImage: {
        backgroundColor: '#363636',
        width: width*0.36,
        height: width*0.36,
        borderRadius: width*0.36/2,
        // margin: 10
    }
})