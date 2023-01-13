//import default
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
//import components
import Estrela from './Estrela';


export default function Estrelas ({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga)

    const RenderEstrelas = () => {
        const listEstrelas = []
        for (let i = 0; i < 5; i++) {
            listEstrelas.push(
                <Estrela 
                    key={i}
                    onPress={() => setQuantidade(i + 1)}
                    desabilitada={!editavel}
                    preenchida={i < quantidade}
                    grande={grande} />
            )
        }
        return listEstrelas
    }
    return <View style={styles.estrelas}>
        <RenderEstrelas />
    </View>
}

const styles = StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
})