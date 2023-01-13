//import default
import React, { useReducer, useEffect, useState, useMemo } from 'react';
import { StyleSheet, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
//import components
import Estrelas from '../../../components/Estrelas';


const distanciaMetros = (distancia) => {
    return `${distancia}m`
}

export default function Produtor ({ nome, imagem, distancia, estrelas }) {
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    )
    const distanciaTexto = useMemo(
        () => distanciaMetros(distancia),
        [distancia]
    )

    return <TouchableOpacity 
        style={styles.card} 
        onPress={inverterSelecionado}>
        <Image source={imagem} accessibilityLabel={nome} style={styles.imagem} />
        <View style={styles.info}>
            <View>
                <Text style={styles.nome}>{ nome }</Text>
                <Estrelas 
                    quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado} />
            </View>
            <Text style={styles.distancia}>{ distanciaTexto }</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4,
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
        marginLeft: 8,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
})