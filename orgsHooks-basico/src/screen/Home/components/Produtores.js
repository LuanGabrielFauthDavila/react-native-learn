//import default
import React, { useReducer, useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
//import components
import Produtor from './Produtor';
//import hooks
import useProdutores from '../../../hooks/useProdutores';


export default function Produtores ({ topo: Topo }) {
    const [titulo, lista] = useProdutores();
    const TopoLista = () => <>
        <Topo />
        <Text style={styles.titulo}>{titulo}</Text>
    </>
    return <FlatList 
            data={lista}
            renderItem={({ item }) => <Produtor {...item} />}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={TopoLista}/>
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }
})