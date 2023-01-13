//import default
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
//import assets
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';


export default function Estrela ({ 
    onPress, 
    desabilitada = true,
    preenchida = false,
    grande = false
}) {
    const styles = stylesFunc(grande)
    const getImagem = () => {
        if (preenchida) {
            return estrela
        }
        return estrelaCinza
    }

    return <TouchableOpacity
        onPress={ onPress }
        disabled={desabilitada}>
        <Image source={getImagem(preenchida)} style={styles.estrela} />
    </TouchableOpacity>
}

const stylesFunc = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
})