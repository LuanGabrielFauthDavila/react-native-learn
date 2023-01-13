import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen')

export default function Detail () {
    return (
        <View style={styles.detail}>
            <Text style={styles.name}>Luan Gabriel Fauth D'Avila</Text>
            <Text style={styles.email}>gabrielfauth@outlook.com</Text>
            <View style={styles.follow}>
                <View style={styles.follows}>
                    <Text style={styles.followsNum}>98</Text>
                    <Text>Seguidores</Text>
                </View>
                <View style={styles.follows}>
                    <Text style={styles.followsNum}>35</Text>
                    <Text>Seguindo</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.repos}>
                <Text style={styles.reposText}>Ver Repositórios</Text>
            </TouchableOpacity>
            <View>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.search}>
                    <Text style={styles.searchText}>Buscar</Text>
                </TouchableOpacity>
            </View>
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
    },
    input: {
        marginTop: 32,
        backgroundColor: '#C6C6C6',
        borderRadius: 6,
        width: width*0.9
    },
    search: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8A07DA',
        marginTop: 8,
        width: width*0.9,
        height: 32,
        borderRadius: 6,
    },
    searchText: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 26
    }
})