import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen')

export default function Detail ({ email, name, followers, following, id }) {
    const navigation = useNavigation();

    return (
        <View style={styles.detail}>
            <Text style={styles.name}>{ name }</Text>
            <Text style={styles.email}>{ email }</Text>
            <View style={styles.follow}>
                <View style={styles.follows}>
                    <Text style={styles.followsNum}>{ followers }</Text>
                    <Text>Seguidores</Text>
                </View>
                <View style={styles.follows}>
                    <Text style={styles.followsNum}>{ following }</Text>
                    <Text>Seguindo</Text>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.repos}
                onPress={() => navigation.navigate('ListaRepositorios', { id: id })} >
                <Text style={styles.reposText}>Ver Repositórios</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    detail: {
        marginTop: '6%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    name: {
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        lineHeight: 26
    },
    follow: {
        marginTop: 32,
        flexDirection: 'row',
        width: width*0.9,
        justifyContent: 'space-evenly'
    },
    follows: {
        alignItems: 'center',
    },
    followsNum: {
        fontSize: 22,
        color: '#8A07DA',
        fontWeight: 'bold',
    },
    repos: {
        marginTop: 32,
    },
    reposText: {
        color: '#8A07DA',
        fontWeight: 'bold'
    }
})